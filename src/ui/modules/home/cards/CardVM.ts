"use client";

import { fetchCardsById } from "@/app/api/slider-card.api";
import { useEffect, useState } from "react";
const useCardVM = () => {
  const [cardsData, setCardsData] = useState<string[]>([]);
  const [bgCardsData, setBgCardsData] = useState<string[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const cardData: string[] = [];
      const bgCardData: string[] = [];
      for (let i = 0; i < 11; i++) {
        const data = await fetchCardsById(i);

        if (data?.data?.poster_bg_url) {
          cardData.push(data.data.poster_bg_url);
          bgCardData.push(data.data.poster_bg_url);
        }
      }
      setCardsData(cardData);
      setBgCardsData(bgCardData);
    };
    loadData();
  }, []);
  return { cardsData, bgCardsData };
};
export default useCardVM;