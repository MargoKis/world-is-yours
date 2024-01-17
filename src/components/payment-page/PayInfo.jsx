import React from 'react'
import { useState } from "react";
import Button from "../common/Button";

const PayInfo = ({ handleDeliveryClick, handleContactInfoClick, handlePayClick }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (value) => {
        setSelectedOption(value);
      };
  
    return (
    <>
    <div className="flex flex-col">
    <h1 className="text-grayDark font-raleway font-semibold text-35px mb-4">
      Оформлення замовлення
    </h1>
    <div className="flex flex-row mb-2 gap-6">
        <p className="text-decoration-line: underline cursor-pointer">Новий покупець </p>
        <p className="text-decoration-line: underline cursor-pointer"> Я постійний клієнт</p>
    </div>
    <div className="flex flex-row justify-between mb-10">
      <p
        className="text-gray font-raleway font-semibold text-20px cursor-pointer"
        onClick={handleContactInfoClick}
      >
        Контактна інформація
      </p>
      <p
        className="font-raleway font-semibold text-20px text-gray cursor-pointer"
        onClick={handleDeliveryClick}
      >
        Доставка
      </p>
      <p
          className="font-raleway font-semibold text-20px cursor-pointer text-blue"
          onClick={handlePayClick}
        >
          Оплата
        </p>
    </div>
    </div>
    <div className="flex flex-col">
        <label className="text-textLight font-medium font-raleway text-sm mb-2">
          Варіант оплати
        </label>
        <form className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="opt1"
              name="opt1"
              value="opt1"
              className="h-4 w-4"
              onChange={() => handleOptionChange("opt1")}
            />
            <label for="opt1" className="text-base">
              {" "}
              Банківська карта (Visa, Mastercard)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="opt2"
              name="opt1"
              value="opt2"
              className="h-4 w-4"
              onChange={() => handleOptionChange("opt1")}
            />
            <label for="opt2" className="text-base">
              {" "}
              Кур’єром (адресна)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="opt3"
              name="opt1"
              value="opt3"
              className="h-4 w-4"
              onChange={() => handleOptionChange("opt1")}
            />
            <label for="opt3" className="text-base">
              {" "}
              У відділення Нової Пошти
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="opt4"
              name="opt1"
              value="opt4"
              className="h-4 w-4"
              onChange={() => handleOptionChange("opt1")}
            />
            <label for="opt4" className="text-base">
              {" "}
              У відділення Укрпошти
            </label>
          </div>
        </form>
        <Button
        classNameBtn="max-w-md bg-gray-dark mt-10 p-4 border rounded-xl font-raleway font-700 text-18px text-white border-black"
        nameBtn="submitForm"
        valueBtn="submit"
      >
        Оплатити
      </Button>
      </div>
    </>
  )
}

export default PayInfo
