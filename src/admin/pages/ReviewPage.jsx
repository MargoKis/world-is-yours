import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import LineChart from "../components/review/LineChart";
import BarChart from "../components/review/BarChart";
import DoughnutChart from "../components/review/DonghnutChart";
import WorldMap from "../components/review/WorldMap";

const ReviewPage = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="flex flex-row justify-between mx-8 mt-6">
        <div className="flex flex-col">
          <h1 className="mb-2 text-blue text-4xl font-semibold">Огляд</h1>
          <div className="flex flex-row mt-3">
            <button
              className={`mr-2 text-base px-3 py-1 rounded-md text-gray ${
                activeButton === "week"
                  ? "bg-blue text-white"
                  : "border-solid border-gray"
              }`}
              onClick={() => handleButtonClick("week")}
            >
              Останні 7 днів
            </button>
            <button
              className={`mr-2 text-base px-3 py-1 rounded-md text-gray ${
                activeButton === "month" ? "bg-blue text-white" : "border-gray"
              }`}
              onClick={() => handleButtonClick("month")}
            >
              Місяць
            </button>
            <button
              className={`mr-2 text-base px-3 py-1 rounded-md text-gray ${
                activeButton === "year" ? "bg-blue text-white" : "border-gray"
              }`}
              onClick={() => handleButtonClick("year")}
            >
              Рік
            </button>
          </div>
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
      <div className="flex flex-row m-8 justify-between">
        <div className="flex flex-col text-xl">
          <div className="flex flex-col bg-darkWhite p-4 mb-6 rounded-2xl">
            <p className="te">Загальні продажі</p>
            <div className="flex flex-row justify-between">
              <p className="font-semibold">20,589 грн</p>
              <p className="text-green-500">+18%</p>
            </div>
          </div>

          <div className="flex flex-col bg-darkWhite p-4 mb-6 rounded-2xl">
            <p className="">Всього замовлень</p>
            <div className="flex flex-row justify-between">
              <p className="font-semibold">400</p>
              <p className="text-red-500">-0,03%</p>
            </div>
          </div>

          <div className="flex flex-col bg-darkWhite p-4 mb-6 rounded-2xl">
            <p className="">Всього замовлень</p>
            <div className="flex flex-row justify-between">
              <p className="font-semibold">10,589</p>
              <p className="text-red-500">-0,03%</p>
            </div>
          </div>
        </div>
        <LineChart />
      </div>
      <div className="flex flex-row gap-5 mr-8 justify-end">
        <WorldMap />
        <BarChart />
        <DoughnutChart />
      </div>
    </>
  );
};

export default ReviewPage;
