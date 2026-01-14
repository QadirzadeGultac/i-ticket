import { getPromotion } from "@/app/lib/http";

export const fetchPromotionById = async (index: number, itemIndex: number) => {
  return await getPromotion(index, itemIndex);
};
import { getCards } from "@/app/lib/http";

export const fetchCardsById = async (index: number, itemIndex: number) => {
  return await getCards(index, itemIndex);
};
