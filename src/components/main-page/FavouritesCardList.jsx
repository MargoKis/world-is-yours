import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import cardData from "../../data";
import axios from 'axios'

const FavoritesCardList = () => {
  const favoriteCards = cardData.slice(0, 8);

  const [products, setProducts] = useState();

  useEffect(() => {
    const API = 'http://localhost:8000/api/products/'
    axios
      .get(API)
      .then((response) => {
        const favourites = response.data;
        setProducts(favourites)
      }, [setProducts])
  })

  return (
    <div className="text-grayLight">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">Наші фаворити</h1>
      <div className="flex flex-wrap justify-around mb-20 mx-6">
        {favoriteCards.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCardList;