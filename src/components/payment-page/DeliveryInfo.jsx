import React from "react";
import DropDownList from "./DropDownList";
import Button from "../common/Button";

const deliveryOptions = [
  { label: "Нова пошта", value: "Нова пошта" },
  { label: "Укр. пошта", value: "Укр. пошта" },
];
const paymentOptions = [
  { label: "Повна передоплата", value: "Повна передоплата" },
  { label: "Накладний платіж", value: "Накладний платіж" },
];

const DeliveryInfo = ({ handleDeliveryClick, handleContactInfoClick }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-grayDark font-inter font-semibold text-35px mb-10">
        Оформлення замовлення
      </h1>
      <div className="flex flex-row justify-between mb-10">
        <p
          className="text-gray font-inter font-semibold text-20px"
          onClick={handleContactInfoClick}
        >
          Контактна інформація
        </p>
        <p
          className="font-inter font-semibold text-20px  text-blue"
          onClick={handleDeliveryClick}
        >
          Доставка
        </p>
      </div>
      {/* компоненти випадаючого списку */}
      <DropDownList options={deliveryOptions} label="Спосіб доставки" />
      <DropDownList options={paymentOptions} label="Спосіб оплати" />

      <textarea
        className="max-w-md px-3 py-2 border rounded-md text-gray resize-none"
        style={{ height: "120px" }}
        placeholder="Введіть додаткову інформацію до замовлення..."
      ></textarea>
      <Button
        classNameBtn="max-w-md bg-gray-dark mt-10 p-4 border rounded-2xl font-raleway font-700 text-18px text-white"
        nameBtn="submitForm"
        valueBtn="submit"
      >
        Оплатити
      </Button>
    </div>
  );
};

export default DeliveryInfo;
