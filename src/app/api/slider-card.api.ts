import { getPromotion } from "@/app/lib/http";

export const fetchPromotionById = async (index: number, itemIndex: number) => {
  return await getPromotion(index, itemIndex);
};