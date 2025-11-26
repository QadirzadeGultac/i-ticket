import { TAlign, TRadius } from "@/data/theme/TTheme";

export const roundSizes = (rounded: TRadius = "md") => {
  const classes = {
    sm: {
      roundedTl: "rounded-tl-sm",
      roundedTr: "rounded-tr-sm",
      roundedBr: "rounded-br-sm",
      roundedBl: "rounded-bl-sm",
      rounded: "rounded-sm",
    },
    md: {
      roundedTl: "rounded-tl-md",
      roundedTr: "rounded-tr-md",
      roundedBr: "rounded-br-md",
      roundedBl: "rounded-bl-md",
      rounded: "rounded-md",
    },
    lg: {
      roundedTl: "rounded-tl-lg",
      roundedTr: "rounded-tr-lg",
      roundedBr: "rounded-br-lg",
      roundedBl: "rounded-bl-lg",
      rounded: "rounded-lg",
    },
    xl: {
      roundedTl: "rounded-tl-xl",
      roundedTr: "rounded-tr-xl",
      roundedBr: "rounded-br-xl",
      roundedBl: "rounded-bl-xl",
      rounded: "rounded-xl",
    },
  };

  return classes[rounded];
};

export const textAligns = (align: TAlign) => {
  const classes: Record<TAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return classes[align];
};
