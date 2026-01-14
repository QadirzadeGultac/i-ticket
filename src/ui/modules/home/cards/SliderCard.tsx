// import { Image, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Header from "../../header/Header";
import SliderVM from "./SliderVM";
import arrowImg from "../../../../assets/right-arrow.svg";

const SliderCard = () => {
  const { imgs, next, prev } = SliderVM({ intervalMs: 3000 });

  return (
    <div>
      <div className="absolute top-5 z-60 max-[1255px]:relative max-[1255px]:top-0">
        <Header />
      </div>

      <div className="flex relative justify-center items-center min-[1024px]:px-5 min-[1024px]:pt-5 min-[1024px]:pb-10">
        {/* Sarı dekorativ blok */}
        <div
          style={{
            width: "100%",
            height: 285,
            backgroundColor: "#fd0",
            transform: "translateY(-50%) rotate(-33deg)",
            position: "absolute",
            top: "30%",
            left: "-15%",
            zIndex: 0,
            border: "none",
            borderRadius: 20,
            filter: "drop-shadow(0 52px 94px rgba(0,0,0,.30))",
          }}
          className="max-[1024px]:hidden"
        />

        {/* Prev düyməsi */}

        {/* Carousel tək slide göstərir */}
        <Carousel
        className="flex! relative! mt-5! rounded-[10px]! min-[1024px]:mt-0!"
          nextControlProps={{
            className: "absolute! top-[42%] right-0! z-10! w-16! h-33! rounded-tl-[100px]! rounded-bl-[100px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!"
          }}
          previousControlProps={{
            className: "absolute! top-[42%] left-0! z-10! w-16! h-33! rounded-tr-[100px]! rounded-br-[100px]! bg-[#ffdd00]! flex! justify-center! items-center!  max-[1025px]:hidden!"
          }}
          slideSize="100%"
          slideGap={0}
          draggable
          withIndicators
          nextControlIcon={
            <img
              onClick={next}
              src={arrowImg}
              className="w-4"
              alt="next"
            />
          }
          previousControlIcon={
            <img
              onClick={prev}
              src={arrowImg}
              className="w-4 -translate-y-[5%] -rotate-180"
              alt="prev"
            />
          }
        >
          <Carousel.Slide className="max-[1024px]:rounded-0!">
            <img className="rounded-[20px] max-[1024px]:rounded-none!" src={imgs} alt="img" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default SliderCard;
