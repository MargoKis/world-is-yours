import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import ArrowRight from "../../assets/icons/arrow-up.svg";
import axios from "axios";
import { $api } from "../../api/api";
import Container from "../common/container";
import useTranslation from "../../locale/locales";

const NewArrivalsCardList = () => {

  const t = useTranslation();
  const [arrivals, setArrivals] = useState([]);
  const initialVisibleCards = 7;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $api.get("/api/products/");
        // #devnote add favorite fiter
        setArrivals(response.data.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + initialVisibleCards);
  };

  return (
    <Container className="justify-center text-grayLight" id="sectionFav">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">
        Новинки
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {arrivals.slice(0, visibleCards).map((item, name) => (
          <Card data={item} key={name} />
        ))}
        {/* {visibleCards < allProducts.length && ( */}
        <div
          className=" m-3 border-2 border-gray-light rounded-lg relative w-90 items-center cursor-pointer"
          onClick={loadMoreCards}
        >
          <div className="flex justify-center items-center px-1 h-full min-h-[27rem]">
            <div className="w-80 max-w-200 flex justify-center items-center ">
              <div className="flex flex-col items-center justify-center ">
                <p className="text-neutral-900 text-[25px] font-semibold font-['Raleway']">
                  {t("see more")}
                </p>
                <p className="text-neutral-900 text-[25px] font-semibold font-['Raleway']">&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrivalsCardList;
