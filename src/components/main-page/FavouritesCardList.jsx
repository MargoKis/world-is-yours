import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import useTranslation from "../../locale/locales";
import { $api } from "../../api/api";
import Container from "../common/container";
const FavoritesCardList = () => {
  const t = useTranslation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $api.get("/api/products/");
        // #devnote add favorite fiter
        setProducts(response.data.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="justify-center text-grayLight" id="sectionFav">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">
        {t("Our favourites")}
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {products.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesCardList;
