import React from 'react'
import CardVM from './CardVM';

const Cards = () => {
  const { cardsData} = CardVM();
  return (
     <div className="font-['SF_Pro_Display']">
        <div className="px-8 lg:px-5 mb-3 lg:mb-8 max-w-[1256px] mr-auto ml-auto"> 
        <p className="pt-8 text-[30px] font-bold w-full ">Popular events</p>
        <pre>{JSON.stringify(cardsData,null,2)}</pre>
        </div>
    </div>
  )
}

export default Cards