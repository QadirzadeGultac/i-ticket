import axios from "axios";

// GET API funksiyası
export const getPromotion = async (itemIndex: number) => {
  try {
    const res = await axios.get("https://api.iticket.az/en/v5/promotions?client=web");
    // console.log("Promotion data:", res.data.response[index].items[itemIndex].data.slide_url);
    return res.data.response[0].items[itemIndex].data.slide_url;
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
};
export const getCards = async (itemIndex: number) => {
  try {
    const res = await axios.get("https://api.iticket.az/en/v5/promotions?client=web");
    console.log("Cards data:", res.data.response[1].items[itemIndex]);
    return res.data.response[1].items[itemIndex];
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
};