import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Image, Button } from "@mantine/core";
import SliderVM from "@/ui/modules/home/cards/SliderVM";
import rightIcon from "@/assets/right-arrow.svg";
import Header from "../../header/Header";
var SliderCard = function () {
    var _a = SliderVM({ intervalMs: 3000 }), img = _a.img, prev = _a.prev, next = _a.next;
    return (_jsxs("div", { children: [_jsx("div", { style: { position: "absolute", top: 20, left: "13.4%", zIndex: 20 }, children: _jsx(Header, {}) }), _jsxs("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    position: "relative",
                }, children: [_jsx("div", { style: {
                            width: "1800px",
                            height: 285,
                            backgroundColor: "#fd0",
                            transform: "translateY(-50%) rotate(-33deg)",
                            position: "absolute",
                            top: "37.9%",
                            left: "-15%",
                            zIndex: 0,
                            filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
                        } }), _jsxs(Card, { className: "position relative", style: {
                            position: "relative",
                            paddingLeft: 15,
                            backgroundColor: "transparent",
                            borderBlockColor: "none",
                            paddingTop: 20,
                            width: 1430,
                            height: 920,
                            filter: "drop-shadow(0 52px 94px rgba(0, 0, 0, .308949))",
                        }, children: [_jsx(Button, { variant: "light", style: {
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
                                }, onClick: prev, children: _jsx("img", { style: { width: 28, height: 28 }, src: rightIcon, alt: "left" }) }), _jsx(Image, { src: img, className: "flex shadow-lg order-1", radius: "20px", style: { zIndex: 5, position: "relative" }, alt: "slide" }), _jsx(Button, { variant: "light", style: {
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
                                }, onClick: next, children: _jsx("img", { style: { textAlign: "start", width: 28, height: 28 }, src: rightIcon, alt: "right" }) })] })] })] }));
};
export default SliderCard;
