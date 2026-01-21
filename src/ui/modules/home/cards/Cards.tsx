"use client";
import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import useCardVM from "./CardVM";
import arrowImg from "../../../../assets/right-arrow.svg";
import { EmblaCarouselType } from "embla-carousel";

const Cards = () => {
  const { cardsData, bgCardsData } = useCardVM();
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (embla) {
      // Loop funksiyasını aktiv etmək
      embla.reInit({ loop: true });
    }
  }, [embla]);

  return (
    <div className="font-['SF_Pro_Display']">
      <p className="pt-8 text-[30px] px-8 lg:px-5 mb-3 lg:mb-8 max-w-[1256px] mx-auto font-bold w-full">
        Popular events
      </p>

      <Carousel
        className="w-full p-0"
        slideSize="21%"
        align="start"
        withControls
        getEmblaApi={setEmbla} // embla API-ni əldə edirik
        breakpoints={[
          { maxWidth: "1024px", slideSize: "45%" },
          { maxWidth: "640px", slideSize: "90%" },
        ]}
        nextControlProps={{
          className:
            "absolute! right-0! z-10! w-16! h-33! rounded-tl-[100px]! rounded-bl-[100px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!",
        }}
        previousControlProps={{
          className:
            "absolute! left-0! z-10! w-16! h-33! rounded-tr-[100px]! rounded-br-[100px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!",
        }}
        nextControlIcon={
          <img src={arrowImg} className="w-4" alt="next" />
        }
        previousControlIcon={
          <img
            src={arrowImg}
            className="w-4 -translate-y-[5%] -rotate-180"
            alt="prev"
          />
        }
      >
        {cardsData.map((img, index) => (
          <Carousel.Slide
            key={index}
            className="relative rounded-lg w-95 h-105 ml-3 mr-3 p-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={bgCardsData[index]}
              alt={`card-${index}`}
              className="absolute w-95 h-105 object-cover p-0"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Cards;
