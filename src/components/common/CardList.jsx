import React, { useState } from "react";
import Card from "./Card";
import cardData from "../../data";

const CardList = () => {
  const initialVisibleCards = 7;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  const loadMoreCards = () => {
    setVisibleCards(
      (prevVisibleCards) => prevVisibleCards + initialVisibleCards
    );
  };

  return (
    <div>
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway">
        Новинки
      </h1>
      <div className="flex flex-wrap justify-around mb-20">
        {cardData.slice(0, visibleCards).map((item, index) => (
          <Card data={item} key={index} />
        ))}
        {visibleCards < cardData.length && (
          <div
            className="flex items-center justify-center w-80 max-w-200 m-4 border-2 border-gray-light rounded-lg relative"
            onClick={loadMoreCards}
          >
            <p className="text-center font-inter py-2 px-4 rounded">
              Посмотреть еще
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
