import { getPromotion } from "@/app/lib/http";

export const fetchPromotionById = async (itemIndex: number) => {
  return await getPromotion(itemIndex);
};
import { getCards } from "@/app/lib/http";

export const fetchCardsById = async (itemIndex: number) => {
  return await getCards(itemIndex);
};
