"use client";
import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import useCardVM from "./CardVM";

const Cards = () => {
  const { cardsData } = useCardVM();
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    const onScroll = () => handleScroll();

    embla.on("scroll", onScroll);

    requestAnimationFrame(() => handleScroll());

    return () => {
      embla.off("scroll", onScroll);
    };
  }, [embla, handleScroll]);

  if (!cardsData.length) return <p>Loading...</p>;

  return (
    <div className="font-['SF_Pro_Display'] px-8 lg:px-5 mb-3 lg:mb-8 max-w-[1256px] mx-auto">
      <p className="pt-8 text-[30px] font-bold w-full">Popular events</p>

      <Carousel
        slideSize="25%"
        slideGap="md"
        withControls
        withIndicators
        getEmblaApi={setEmbla}
      >
        {cardsData.map((img, index) => (
          <Carousel.Slide key={index}>
            <img
              src={img}
              alt={`card-${index}`}
              className="w-full h-64 rounded-lg object-cover"
            />
          </Carousel.Slide>
        ))}
      </Carousel>

      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </div>
  );
} ;

export default Cards;
