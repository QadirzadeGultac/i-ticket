import { Card, Image, Button } from "@mantine/core";
import SliderVM from "@/ui/modules/home/cards/SliderVM";
import rightIcon from "@/assets/right-arrow.svg";
import Header from "../../header/Header";

const SliderCard = () => {
  const { img, prev, next } = SliderVM({ intervalMs: 3000 });

  return (
    <div>
      <div style={{ position: "absolute", top: 20, left: "13.4%", zIndex: 20 }}>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "1800px",
            height: 285,
            backgroundColor: "#fd0",
            transform: "translateY(-50%) rotate(-33deg)",
            position: "absolute",
            top: "37.9%",
            left: "-15%",
            zIndex: 0,
            filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
          }}
        ></div>
        <Card
          className="position relative"
          style={{
            position: "relative",
            paddingLeft: 15,
            backgroundColor: "transparent",
            borderBlockColor: "none",
            paddingTop: 20,
            width: 1430,
            height: 920,
            filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
          }}
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
              top: "45.8%",
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
              top: "45.8%",
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
