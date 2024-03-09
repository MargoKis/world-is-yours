import React, { useState } from "react";
import CountryDropdown from "../payment-page/CountryDropDown";
import CityDropdown from "../payment-page/CityDropDown";
import Button from "../common/Button";
import DeliveryOptions from "./DeliveryOptions";

const DeliveryInfo = ({
  handleDeliveryClick,
  handleContactInfoClick,
  handlePayClick,
  selectedCity,
}) => {
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [addressError, setAddressError] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [deliveryOptionError, setDeliveryOptionError] = useState("");
  const [selectedCountryError, setSelectedCountryError] = useState("");

  const handleAddressChange = (event) => {
    const inputValue = event.target.value;
    if (
      /^[a-zA-Zа-яА-Я0-9\s.,]*$/.test(inputValue) &&
      inputValue.length <= 60
    ) {
      setAddress(inputValue);
      setAddressError("");
    } else {
      setAddressError("Up to 60 characters");
    }
  };

  const handleApartmentChange = (event) => {
    const inputValue = event.target.value;
    setApartment(inputValue);

    if (inputValue.trim() === "") {
      setApartmentError("Required");
    } else if (/^\d*$/.test(inputValue) && inputValue.length <= 3) {
      setApartmentError("");
    } else {
      setApartmentError("Invalid");
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setDeliveryOptionError("");
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (selectedCountry) => {
    if (selectedCountry) {
      setSelectedCountry(selectedCountry);
      setSelectedCountryError("");
    } else {
      setSelectedCountryError("Select country");
    }
  };

  const handleCitySelect = (selectedCity) => {
    console.log("Selected City:", selectedCity);
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-grayDark font-raleway font-semibold text-35px mb-4">
          Оформлення замовлення
        </h1>
        <div className="flex flex-row mb-2 gap-6">
          <p className="text-decoration-line: underline cursor-pointer">
            Новий покупець{" "}
          </p>
          <p className="text-decoration-line: underline cursor-pointer">
            {" "}
            Я постійний клієнт
          </p>
        </div>
        <div className="flex flex-row justify-between mb-10">
          <p
            className="text-gray font-raleway font-semibold text-20px cursor-pointer"
            onClick={handleContactInfoClick}
          >
            Контактна інформація
          </p>
          <p
            className="font-raleway font-semibold text-20px text-blue"
            onClick={handleDeliveryClick}
          >
            Доставка
          </p>
          <p
            className="text-gray font-raleway font-semibold text-20px cursor-pointer "
            onClick={handlePayClick}
          >
            Оплата
          </p>
        </div>

        <CountryDropdown onSelectCountry={handleCountrySelect} />
        {selectedCountryError && (
          <p className="text-red-500 text-xs mb-3 ml-2">
            {selectedCountryError}
          </p>
        )}
        <CityDropdown
          onSelectCity={handleCitySelect}
          selectedCountry={selectedCountry}
        />

        <DeliveryOptions
          handleOptionChange={handleOptionChange}
          deliveryOptionError={deliveryOptionError}
        />

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col w-full">
            <label
              htmlFor="text"
              className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
            >
              Адреса
            </label>
            <input
              className="font-light border rounded-xl w-full p-3 border-black mb-1"
              placeholder="Введіть свою адресу"
              onChange={handleAddressChange}
              value={address}
            ></input>
            {addressError && (
              <p className="text-red-500 text-xs mb-3 ml-2">{addressError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="text"
              className="mb-1 text-textLight font-medium font-raleway text-sm"
            >
              Квартира
            </label>
            <input
              className="font-light border rounded-xl w-16 p-3 pl-4 border-black mb-1"
              placeholder="000"
              onChange={handleApartmentChange}
              value={apartment}
            ></input>
            {apartmentError && (
              <p className="text-red-500 text-xs mb-3 ml-2">{apartmentError}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label
            htmlFor="additionalInfo"
            className="text-textLight font-medium font-raleway text-sm "
          >
            Додаткова інформація до замовлення
          </label>
          <textarea
            id="additionalInfo"
            className="max-w-md px-3 py-2 border rounded-md resize-none mt-4 "
            style={{ height: "110px" }}
            placeholder="Чи є додаткові умови для доставки?"
          ></textarea>
        </div>
        <Button
          classNameBtn="max-w-md bg-gray-dark mt-10 p-4 border rounded-xl font-raleway font-700 text-18px text-white border-black"
          nameBtn="submitForm"
          valueBtn="submit"
        >
          Варіанти оплати
        </Button>
      </div>
    </>
  );
};

export default DeliveryInfo;
