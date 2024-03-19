import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CategoryDropdown = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <div className="category w-96 h-full bg-darkWhite p-4 mb-6 rounded-2xl ml-8">
      <div className="category-title text-gray mb-4">Категорії</div>
      <ul className="sub-categories ml-4">
        <li>
          <div
            className="category-item flex justify-between items-center cursor-pointer  mb-2"
            onClick={() => toggleDropdown("Для вас")}
          >
            <p className="">Для вас</p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`arrow ${
                openCategory === "Для вас" ? "transform rotate-90" : ""
              }`}
            />
          </div>
          {openCategory === "Для вас" && (
            <ul className="cursor-default text-textLight ml-2 flex flex-col gap-2 mb-2">
              <li className="hover:bg-lightGray p-1">Одяг</li>
              <li className="hover:bg-lightGray p-1">Взуття</li>
              <li className="hover:bg-lightGray p-1">Аксесуари</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="category-item flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleDropdown("Для автодому")}
          >
            <p className="">Для автодому</p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`arrow ${
                openCategory === "Для автодому" ? "transform rotate-90" : ""
              }`}
            />
          </div>
          {openCategory === "Для автодому" && (
            <ul className="cursor-default text-textLight ml-2 flex flex-col gap-2 mb-2">
              <li className="hover:bg-lightGray p-1">
                Технічна підтримка автодому
              </li>
              <li className="hover:bg-lightGray p-1">
                Устаткування для кемпінгу
              </li>
              <li className="hover:bg-lightGray p-1">Кухонне обладнання</li>
              <li className="hover:bg-lightGray p-1">Автодомові аксесуари</li>
              <li className="hover:bg-lightGray p-1">Комфорт та зручності</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="category-item flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleDropdown("Додаткове")}
          >
            <p className="">Додаткове</p>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`arrow ${
                openCategory === "Додаткове" ? "transform rotate-90" : ""
              }`}
            />
          </div>
          {openCategory === "Додаткове" && (
            <ul className="cursor-default text-textLight ml-2 flex flex-col gap-2 mb-2">
              <li className="hover:bg-lightGray p-1">Подорожні товари</li>
              <li className="hover:bg-lightGray p-1">Активний відпочинок</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CategoryDropdown;
