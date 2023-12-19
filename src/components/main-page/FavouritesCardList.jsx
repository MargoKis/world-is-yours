import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import axios from 'axios'


const FavoritesCardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API = 'http://localhost:8000/api/products/';

    axios.get(API)
      .then((response) => {
        const favourites = response.data; 
 
        const limitedFavorites = favourites.slice(0, 8);
        setProducts(limitedFavorites); 
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []); 

  return (
    <div className="text-grayLight" id="sectionFav">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">Наші фаворити</h1>
      <div className="flex flex-wrap justify-around mb-20 mx-6">
        {products.map((item, index) => (
          <Card
            key={index} 
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCardList;
