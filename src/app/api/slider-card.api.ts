import { getPromotion } from "@/app/lib/http";

export const fetchPromotionById = async (index, itemIndex) => {
  return await getPromotion(index, itemIndex);
};