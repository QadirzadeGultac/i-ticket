import { fetchCardsById } from "@/app/api/slider-card.api";
import { useEffect, useState } from "react";
const CardVM = () => {
    const [cardsData, setCardsData] = useState<string[]>([]);
    useEffect(()=>{
        const datas = async () => {
         const cardData = [];

    for(let i=0; i<20; i++){
        const data = await fetchCardsById(i);
        cardData.push(data.data);
    }
setCardsData(cardData);
}

datas();
 }, []);
    return {
        cardsData
    };
};

export default CardVM;