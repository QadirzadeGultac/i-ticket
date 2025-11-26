import axios from "axios";

// GET API funksiyası
export const getPromotion = async (index, itemIndex) => {
  try {
    const res = await axios.get("https://api.iticket.az/en/v5/promotions?client=web");
    console.log("Promotion data:", res.data.response[index].items[itemIndex].data.slide_url);
    return res.data.response[index].items[itemIndex].data.slide_url;
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
};
