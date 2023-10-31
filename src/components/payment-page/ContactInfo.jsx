import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-grayDark font-inter font-semibold text-35px mb-10">
        Оформлення замовлення
      </h1>
      <div className="flex flex-row gap-28 mb-10">
        <p className="text-grayDark font-inter font-semibold text-21px">
          Контактна інформація
        </p>
        <p className="text-gray font-inter font-semibold text-21px">Доставка</p>
      </div>
      <div className="flex flex-row gap-8">
        <Input
          classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
          typeInput="text"
          placeholderInput="Ім’я"
        />
        <Input
          classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
          typeInput="text"
          placeholderInput="Прізвище"
        />
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <Input
          classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
          typeInput="tel"
          placeholderInput="Номер телефону"
        />
        <Input
          classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
          typeInput="email"
          placeholderInput="Електрона пошта"
        />
      </div>
      <div className="flex flex-row gap-8 mt-10">
        <div className="flex flex-col gap-4">
          <Input
            classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
            typeInput="text"
            placeholderInput="Країна"
          />
          <Input
            classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
            typeInput="text"
            placeholderInput="Адреса"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Input
            classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
            typeInput="text"
            placeholderInput="Населений пункт"
          />
          <Input
            classNameInput="text-custom-black border rounded-2xl max-w-md p-3"
            typeInput="text"
            placeholderInput="Поштовий індекс"
          />
        </div>
      </div>
      <Button
        classNameBtn="max-w-md bg-gray-dark mt-10 p-3 border rounded-2xl font-raleway font-700 text-18px"
        nameBtn="submitForm"
        valueBtn="submit"
      >
        Обрати спосіб доставки
      </Button>
    </div>
  );
};

export default ContactInfo;
