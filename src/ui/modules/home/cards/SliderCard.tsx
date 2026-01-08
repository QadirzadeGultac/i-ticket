import { Card, Image, Button } from "@mantine/core";
import SliderVM from "@/ui/modules/home/cards/SliderVM";
import rightIcon from "@/assets/right-arrow.svg";
import Header from "../../header/Header";

const SliderCard = () => {
  const { img, prev, next } = SliderVM({ intervalMs: 3000 });

  return (
    <div>
      <div style={{ position: "absolute", top: 20, zIndex: 60 }}>
        <Header />
      </div>
      <div className="flex relative justify-center">
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
            filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
          }}
          className="max-[1024px]:hidden"
        ></div>
        <Card
          // style={{
          //   position: "relative",
          //   paddingLeft: 15,
          //   backgroundColor: "transparent",
          //   borderBlockColor: "none",
          //   paddingTop: 20,
          //   height: 857,
          //   // filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
          // }}
          className="position! relative! pb-10! max-[1455px]:w-[95vw]! min-[1455px]:w-[1435px]! h-[857px] bg-transparent! border-0! pt-5! max-[1255px]:pt-50!"

        >
          <Button
            variant="light"
            style={{
              width: 67,
              height: 134,
              textAlign: "end",
              borderBottomLeftRadius: 9999,
              borderTopLeftRadius: 9999,
              backgroundColor: "#fd0",
              position: "absolute",
              top: "49.2%",
              left: 15,
              transform: "translateY(-50%) rotate(180deg)",
              zIndex: 10,
            }}
            onClick={prev}
          >
            <img style={{ width: 28, height: 28 }} src={rightIcon} alt="left" />
          </Button>
          <Image
            src={img}
            className="flex shadow-lg order-1"
            radius="20px"
            style={{ zIndex: 5, position: "relative" }}
            alt="slide"
          />
          <Button
            variant="light"
            style={{
              width: 67,
              height: 134,
              borderBottomLeftRadius: 9999,
              borderTopLeftRadius: 9999,
              textAlign: "start",
              backgroundColor: "#fd0",
              position: "absolute",
              top: "49.2%",
              right: 15,
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={next}
          >
            <img
              style={{ textAlign: "start", width: 28, height: 28 }}
              src={rightIcon}
              alt="right"
            />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SliderCard;
