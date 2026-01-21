import axios from "axios";

// GET API funksiyası
export const getPromotion = async (itemIndex: number) => {
  try {
    const res = await axios.get("https://api.iticket.az/en/v5/promotions?client=web");
    console.log("Promotion data:", res.data.response[0].items[itemIndex].data.slide_url);
    return res.data.response[0].items[itemIndex].data.slide_url;
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
};
export const getCards = async (itemIndex: number) => {
  try {
    const res = await axios.get(
      "https://api.iticket.az/en/v5/promotions?client=web"
    );

    const items = res.data?.response?.[1]?.items;

    if (!items || !items[itemIndex]) {
      console.warn("Item tapılmadı:", itemIndex);
      return null;
    }
//   console.log(
//   "Cards data:",
//   JSON.stringify(res.data.response[1].items[itemIndex].data, null, 2)
// );
    return items[itemIndex]; // ⬅️ bütün item qaytarırıq
  } catch (error) {
    console.error("Xəta baş verdi:", error);
    return null; // ⬅️ ÇOX VACİB
  }
};
