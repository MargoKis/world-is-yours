import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import FormFields from "./FormFields";

const CommonInfo = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  return (
    <>
      <div className="flex flex-row justify-between mx-8 mt-8 items-center">
        <div className="flex flex-col">
          <h1 className="mb-2 text-blue text-4xl font-semibold">
            Створення товару
          </h1>
          <p>
            <FontAwesomeIcon icon={faAngleLeft} className="mr-2 mt-4" />
            Повернення до каталогу
          </p>
        </div>
        <button className="h-3 p-7 border border-gray rounded-xl relative">
        <FontAwesomeIcon icon={faCheck} className="text-gray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
      </div>
      <div className="flex flex-row ml-8 gap-16 mt-10 text-xl">
        <h2
          className={
            activeTab === 0
              ? "text-blue cursor-pointer font-semibold underline"
              : "font-medium text-gray cursor-pointer"
          }
          onClick={() => handleClick(0)}
        >
          Загальна інформація
        </h2>
        <h2
          className={
            activeTab === 1
              ? "text-blue cursor-pointer font-semibold underline"
              : "font-medium text-gray cursor-pointer"
          }
          onClick={() => handleClick(1)}
        >
          Кольори/розміри
        </h2>
        <h2
          className={
            activeTab === 2
              ? "text-blue cursor-pointer font-semibold underline"
              : "font-medium text-gray cursor-pointer"
          }
          onClick={() => handleClick(2)}
        >
          Доповни комплект
        </h2>
      </div>
      <FormFields/>
    </>
  );
};

export default CommonInfo;
