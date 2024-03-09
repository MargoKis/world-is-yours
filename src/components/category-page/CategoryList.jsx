import React, { useState } from "react";
import FilterPopup from "./FilterPopup";
import Filter from "../../assets/icons/icon-filters.svg";

const CategoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const renderCategories = () => {
    switch (selectedFilter) {
      case "forYou":
        return (
          <>
            <p className="cursor-pointer">Одяг</p>
            <p className="cursor-pointer">Взуття</p>
            <p className="cursor-pointer">Аксесуари</p>
          </>
        );
      case "forAutoHouse":
        return (
          <>
            <p className="cursor-pointer">Технічна підтримка автодому</p>
            <p className="cursor-pointer">Устаткування для кемпінгу</p>
            <p className="cursor-pointer">Кухонне обладнання</p>
            <p className="cursor-pointer">Автодомові аксесуари</p>
          </>
        );
      case "additional":
        return (
          <>
            <p className="cursor-pointer">Подорожні товари</p>
            <p className="cursor-pointer">Активний відпочинок</p>
          </>
        );
      default:
        return (
          <>
            <p className="cursor-pointer">Одяг</p>
            <p className="cursor-pointer">Взуття</p>
            <p className="cursor-pointer">Аксесуари</p>
            <p className="cursor-pointer">Технічна підтримка автодому</p>
            <p className="cursor-pointer">Устаткування для кемпінгу</p>
            <p className="cursor-pointer">Кухонне обладнання</p>
            <p className="cursor-pointer">Автодомові аксесуари</p>
            <p className="cursor-pointer">Комфорт та зручності</p>
            <p className="cursor-pointer">Подорожні товари</p>
            <p className="cursor-pointer">Активний відпочинок</p>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-blue text-xl mb-4 font-semibold">Категорії</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-6 font-medium ">
          <p className="cursor-pointer" onClick={() => handleFilterClick("")}>
            Все
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleFilterClick("forYou")}
          >
            Для вас
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleFilterClick("forAutoHouse")}
          >
            Для автодому
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleFilterClick("additional")}
          >
            Додаткове
          </p>
        </div>
        <img
          src={Filter}
          alt="filter icon"
          className="cursor-pointer"
          onClick={togglePopup}
        />
      </div>
      <hr className="text-blue my-2" />
      <div className="flex flex-row gap-6 text-sm text-gray font-medium">
        {renderCategories()}
      </div>
      {isPopupOpen && <FilterPopup onClose={togglePopup} />}
    </div>
  );
};

export default CategoryList;
