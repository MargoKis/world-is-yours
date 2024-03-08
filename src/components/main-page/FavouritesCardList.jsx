import React, { useEffect, useState} from "react";
import Card from "../common/Card";
import axios from "axios";
import useTranslation from "../../locale/locales";

const FavoritesCardList = () => {
  const t = useTranslation();


  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    const API = "http://localhost:8000/api/products/";

    axios
      .get(API)
      .then((response) => {
        const favourites = response.data;
        const categoryOneProducts = favourites.filter(
          (item) => item.category === 1
        ); 
        const limitedFavorites = categoryOneProducts.slice(0, 8);
        setProducts(limitedFavorites);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className="text-grayLight">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">
        {/* Наші фаворити */}
        {t('Our favourites')}
      </h1>
      <div className="flex flex-wrap justify-around mb-20 mx-6">
        {products.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCardList;
