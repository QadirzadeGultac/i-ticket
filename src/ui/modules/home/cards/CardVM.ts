"use client";

import { fetchCardsById } from "@/app/api/slider-card.api";
import { useEffect, useState } from "react";

const CardVM = () => {
  const [cardsData, setCardsData] = useState<string[]>([]);
  const [bgCardsData, setBgCardsData] = useState<string[]>([]);

  useEffect(() => {
    const datas = async () => {
      const cardData: string[] = [];
      const bgData: string[] = [];

      for (let i = 0; i < 13; i++) {
        const data = await fetchCardsById(i);

        const posterBg = data?.data?.poster_bg_url || data?.data?.poster_url || "";
        const poster = data?.data?.poster_url || posterBg; // boş qalmasın

        cardData.push(posterBg);
        bgData.push(poster);
      }

      setCardsData(cardData);
      setBgCardsData(bgData);
    };

    datas();
  }, []);
  
  return {
    cardsData,
    bgCardsData,
  };
};

export default CardVM;
