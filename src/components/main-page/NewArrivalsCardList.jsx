import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import ArrowRight from "../../assets/icons/arrow-up.svg";
import axios from 'axios'

const NewArrivalsCardList = () => {
  const [arrivals, setArrivals] = useState([]);
  const initialVisibleCards = 7;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  useEffect(() => {
    const API = 'http://localhost:8000/api/products/';

    axios.get(API)
      .then((response) => {
        const allProducts = response.data;
        const categoryTwoArrivals = allProducts.filter(item => item.category === 2); 
        setArrivals(categoryTwoArrivals);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []); 

  const loadMoreCards = () => {
    setVisibleCards(
      (prevVisibleCards) => prevVisibleCards + initialVisibleCards
    );
  };

  return (
    <div className="text-grayLight">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">
        Новинки
      </h1>
      <div className="flex flex-wrap justify-around mb-20 mx-6">
        {arrivals.slice(0, visibleCards).map((item, name) => (
          <Card data={item} key={name} />
        ))}
        {/* {visibleCards < allProducts.length && ( */}
          <div
            className="flex justify-center w-80 m-4 border-2 border-gray-light rounded-lg relative cursor-pointer"
            onClick={loadMoreCards}
          >
            {" "}
            <div className="flex flex-col justify-center justify-items-center mb-10 gap-4">
              <p className="font-inter py-2 px-4 rounded text-custom-black">
                Дивитися ще
              </p>
              <img
                src={ArrowRight}
                alt="icon arrow right"
                className="text-custom-black w-4 ml-16 transform rotate-90"
              />
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default NewArrivalsCardList;