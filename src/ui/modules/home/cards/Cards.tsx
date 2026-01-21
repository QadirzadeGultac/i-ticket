"use client";

import React from "react";
import useCardVM from "./CardVM";

const Cards = () => {
  const { cardsData, bgCardsData } = useCardVM();

  console.log("cardsData:", cardsData);
  console.log("bgCardsData:", bgCardsData);

  return (
    <div className="font-['SF_Pro_Display']">
      <div className="px-8 lg:px-5 mb-3 lg:mb-8 max-w-[1256px] mr-auto ml-auto">
        <p className="pt-8 text-[30px] font-bold w-full">Popular events</p>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {cardsData.map((img, index) => {
            const bg = bgCardsData?.[index]; // optional chaining
            const image = img; // optional chaining əgər lazımdırsa

            if (!image) return null; // boş image varsa render etmə

            return (
              <div
                key={index}
                style={{
                  backgroundImage: bg ? `url(${bg})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="flex justify-center items-center rounded-lg overflow-hidden"
              >
                <img src={image} alt="card" className="rounded-lg relative" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
