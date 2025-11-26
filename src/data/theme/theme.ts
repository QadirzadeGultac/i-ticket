import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    blue: [
      "#e8f4fd",
      "#8ab8f7",
      "#73a9f5",
      "#5b9bf4",
      "#448df2",
      "#2c7ef1",
      "#1570ef",
      "#1365d7",
      "#115abf",
      "#0f4ea7",
    ],
  },
  fontSizes: {
    "2xl": "calc(1.5rem * var(--mantine-scale))",
    "3xl": "calc(1.875rem * var(--mantine-scale))",
  },
  cursorType: "pointer",
  fontFamily: "Mulish, sans-serif",
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  defaultGradient: {
    deg: 180,
    from: "#5b9bf4",
    to: "#2c7ef1",
  },
});
