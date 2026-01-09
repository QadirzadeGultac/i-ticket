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

      <div className="flex relative justify-center items-center">
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            width: "100%",
            border: "none !important",
            borderRadius: 10,
          }}
          nextControlProps={{
            style: {
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
              backgroundColor: "#fd0",
              width: 67,
              height: 134,  
              position: "absolute",
              left: "83%",
              zIndex: 10,
            },
          }}
          previousControlProps={{
            style: {
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              backgroundColor: "#fd0",
              width: 67,
              height: 134,
              position: "absolute",
              left: "13.5%",
              zIndex: 10,
            },
          }}
          slideSize="100%"
          slideGap={0}
          draggable
          withIndicators
          
          nextControlIcon={
            <img
              onClick={next}
              src={arrowImg}
              style={{ width: 20 }}
              alt="next"
            />
          }
          previousControlIcon={
            <img
              onClick={prev}
              src={arrowImg}
              style={{
                width: 20,
                transform: "translateY(-5%) rotate(-180deg)",
              }}
              alt="prev"
            />
          }
        >
          <Carousel.Slide>
            <img src={imgs} alt="" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default SliderCard;
