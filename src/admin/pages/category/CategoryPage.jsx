import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import SubCategoryBox from "../../components/category/SubCategoryBox";
import CategoryBox from "../../components/category/CategoryBox";

const CategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);

  return (
    <>
      <div className="flex flex-row justify-between mx-8 mt-6">
        <div className="flex flex-col">
          <h1 className="mb-2 text-blue text-4xl font-semibold">Категорії</h1>
          <div className="flex flex-row mt-3"></div>
        </div>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            icon={faBell}
            className="mr-8 text-xl cursor-pointer"
          />
          <img src="" alt="user avatar" />
        </div>
      </div>
      <hr className="text-gray mx-8 mt-6" />

      <div className="flex flex-row mt-8 mr-8">
        <CategoryBox />
        <SubCategoryBox
          title="Для вас"
          subcategories={["Одяг", "Взуття", "Аксессуари"]}
          setSubcategories={setSubcategories}
        />
        <SubCategoryBox
          title="Для автодому"
          subcategories={["Технічна підтримка автодому", "Устаткування для кемпінгу", "Кухонне обладнання", "Автодомові аксесуари", "Комфорт та зручності"]}
          setSubcategories={setSubcategories}
        />
        <SubCategoryBox
          title="Додаткове"
          subcategories={[
            "Подорожні товари",
            "Активний відпочинок",
          ]}
          setSubcategories={setSubcategories}
        />
      </div>
    </>
  );
};

export default CategoryPage;
