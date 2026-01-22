"use client";
import { useEffect, useState, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import useCardVM from "./CardVM";
import arrowImg from "../../../../assets/right-arrow.svg";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "antd";
const Cards = () => {
  const {
    cardsData,
    bgCardsData,
    cardName,
    cardDate,
    formatAzDate,
    cardMinPrice,
  } = useCardVM();
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (embla) {
      // Loop funksiyasını aktiv etmək
      embla.reInit({ loop: true });
    }
  }, [embla]);
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );
  return (
    <div className="font-['SF_Pro_Display'] mb-50">
      <p className="pt-8 text-[30px] px-8 lg:px-5 mb-3 lg:mb-8 max-w-[1256px] mx-auto font-bold w-full">
        Popular events
      </p>

      <Carousel
        plugins={[autoplay.current]}
        className="w-full p-0 flex! justify-center! items-center!"
        withControls
        nextControlProps={{
          className:
            "absolute! right-0! z-10! w-12! h-25! rounded-tl-[100px]! rounded-bl-[100px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!",
        }}
        previousControlProps={{
          className:
            "opacity-100! absolute! left-0! z-10! w-12! h-25! rounded-tr-[100px]! rounded-br-[100px]! rounded-tl-[0px]! rounded-bl-[0px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!",
        }}
        getEmblaApi={setEmbla}
        slideSize={{ base: "100%", sm: "50%", md: "20%" }}
        slideGap={{ base: 0, sm: "md" }}
        emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
        nextControlIcon={<img src={arrowImg} className="w-4 " alt="next" />}
        previousControlIcon={
          <img src={arrowImg} className="w-4 rotate-180" alt="previous" />
        }
      >
        {cardsData.map((img, index) => (
          <Carousel.Slide
            key={index}
            className="relative rounded-[20px] w-[100px]! md:w-[381px]! h-[428px]! ml-3! mr-3!  p-0! flex justify-center items-center"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={bgCardsData[index]}
              alt={`card-${index}`}
              className="absolute object-cover p-0 w-full h-full"
            />
            <div className="z-100">
              <div
                className="
                text-black
  text-[10px]
  font-bold
  overflow-hidden
  pb-0
  pt-0
  truncate
  transition-all
  duration-150
  delay-200
  ease-in-out
  whitespace-nowrap
   flex flex-col group-hover:flex-row items-start w-full flex-1
   p-8
    leading-7 
    absolute
    left-0
    bottom-6
              "
              >
                <p className="z-90 text-wrap max-w-[150px] text-white text-[1.25rem]">{cardName[index]}</p>
                <p className="z-90 w-max-[300px]! flex-wrap text-white text-[1.25rem]">{formatAzDate(cardDate[index])}</p>
              </div>
              <Button
                size="large"
                className="bg-[#fd0]! leading-5! py-7! border-none! text-black! font-bold! px-5!  absolute! bottom-[30px]! right-[30px]! rounded-full! z-100"
              >
                <span className="flex! justify-center! items-center! text-black! font-bold! bottom-[30px]! right-[30px]! text-[1.25rem]!">
                  {cardMinPrice[index]} ₼-dan{" "}
                </span>
              </Button>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Cards;
