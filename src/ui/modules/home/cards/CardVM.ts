"use client";

import { fetchCardsById } from "@/app/api/slider-card.api";
import { useEffect, useState } from "react";

const CardVM = () => {
  const [cardsData, setCardsData] = useState<string[]>([]);
  const [bgCardsData, setBgCardsData] = useState<string[]>([]);
  const [cardName, setName] = useState<string[]>([]);
  const [cardDate, setCardDate] = useState<string[]>([]);
  const [cardMinPrice, setCardMinPrice] = useState<string[]>([]);
  useEffect(() => {
    const datas = async () => {
      const cardData: string[] = [];
      const bgData: string[] = [];
      const nameData: string[] = [];
      const dateData: string[] = [];
      const minPriceData: string[] = [];
      for (let i = 0; i < 13; i++) {
        const data = await fetchCardsById(i);
        nameData.push(data?.data?.venues[i]?.name);
        const posterBg = data?.data?.poster_bg_url || data?.data?.poster_url || "";
        const poster = data?.data?.poster_url || posterBg; // boş qalmasın
        dateData.push(data?.data?.event_starts_at);
        minPriceData.push(data?.data?.min_price || "");
        cardData.push(posterBg);
        bgData.push(poster);
      }

      setName(nameData);
      setCardsData(cardData);
      setBgCardsData(bgData);
      setCardDate(dateData);
      setCardMinPrice(minPriceData);
    };

    datas();
  }, []);

const formatAzDate = (isoStr?: string | null): string => {
  if (!isoStr) return "";

  // 1. .000000 hissəsini kəsirik
  const cleanStr = isoStr.replace(/\.\d{1,6}/, "");

  // 2. JS Date obyektinə çeviririk
  const date = new Date(cleanStr);

  if (isNaN(date.getTime())) return "";

  // 3. Ay adını azərbaycanca yazdırırıq
  const day = date.getDate();
  const year = date.getFullYear();
  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const month = monthNames[date.getMonth()];

  return `${day} ${month} ${year}`;
};

  return {
    cardsData,
    bgCardsData,
    cardName,
    cardDate,
    formatAzDate,
    cardMinPrice,
  };
};

export default CardVM;
