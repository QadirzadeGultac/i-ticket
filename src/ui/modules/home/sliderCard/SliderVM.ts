import { useState, useEffect } from "react";
import { fetchPromotionById } from "@/app/api/slider-card.api";

const SliderVM = ({ intervalMs = 3000 }) => {
  const [imgs, setImgs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const loadImgs = async () => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
      for (let i = 0; i < fetchPromotionById.length; i++) {
        const data = await fetchPromotionById(i);
        arr.push(data);
      }

      setImgs(arr);
    };}
    loadImgs();
  }, []);
  useEffect(() => {
    if (imgs.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [imgs, intervalMs]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };
  return {
    imgs: imgs[currentIndex],
    prev,
    next,
  };
};

export default SliderVM;
