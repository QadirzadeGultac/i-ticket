import { useState, useEffect } from "react";
import { fetchPromotionById } from "@/app/api/slider-card.api";

const SliderVM = ({ intervalMs = 3000 }) => {
  const [imgs, setImgs] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImgs = async () => {
      const arr = [];

      for (let i = 0; i < fetchPromotionById.length; i++) {
        const data = await fetchPromotionById(i);

        // console.log("API DATA", data); // BURDA URL-lər görünür

        // data birbaşa url-dirsə:
        arr.push(data);

        // əgər data içindədirsə
        // arr.push(data.imgUrl);
        // arr.push(data.img);
        // arr.push(data.banner);
        // sən hansının düzgün olduğunu dedin: URL-lər array-də görünür
      }

      setImgs(arr);
    };

    loadImgs();
  }, []);

  // avtomatik dəyişmə
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
    setCurrentIndex((prev) =>
      prev === 0 ? imgs.length - 1 : prev - 1
    );
  };

  // console.log("ACTIVE IMG:", imgs[currentIndex]);

  return {
    imgs: imgs[currentIndex],
    prev,
    next,
  };
};

export default SliderVM;
