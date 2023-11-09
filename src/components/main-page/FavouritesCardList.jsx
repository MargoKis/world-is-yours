import React from "react";
import Card from "../common/Card";
import cardData from "../../data";

const FavoritesCardList = () => {
  const favoriteCards = cardData.slice(0, 8);

  return (
    <div className="text-grayLight">
      <h1 className="flex items-center justify-center mt-16 mb-6 font-raleway text-custom-black text-30px">Наші фаворити</h1>
      <div className="flex flex-wrap justify-around mb-20 ml-3 mr-3">
        {favoriteCards.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCardList;