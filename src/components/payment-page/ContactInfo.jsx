import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const ContactInfo = ({ handleDeliveryClick, handleContactInfoClick }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Name field is required");
      return false;
    }
    if (!/^[^\d\s]{3,16}$/.test(name)) {
      setNameError("Only letters from 3 to 16 characters");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateSurname = () => {
    if (!surname.trim()) {
      setSurnameError("Surname field is required");
      return false;
    }
    if (!/^[^\d\s]{3,16}$/.test(surname)) {
      setSurnameError("Only letters from 3 to 16 characters");
      return false;
    }
    setSurnameError("");
    return true;
  };

  const validatePhone = () => {
    if (!phone.trim()) {
      setPhoneError("Phone number field is required");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("Email field is required");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isSurnameValid = validateSurname();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    if (isNameValid && isSurnameValid && isPhoneValid && isEmailValid) {
      handleDeliveryClick();
    } else {
      setFormError("Please fill in the form correctly");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-raleway font-semibold text-35px mb-10">
        Оформлення замовлення
      </h1>
      <div className="flex flex-row justify-between mb-10">
        <p
          className="font-raleway font-semibold text-20px text-blue"
          onClick={handleContactInfoClick}
        >
          Контактна інформація
        </p>
        <p
          className="text-gray font-raleway font-semibold text-20px cursor-pointer"
          onClick={handleDeliveryClick}
        >
          Доставка
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Input
              classNameInput="font-light text-textLight border rounded-xl p-3 w-52 border-black" // font-raleway
              typeInput="text"
              placeholderInput="Ім’я"
              value={name}
              onChangeInput={(e) => setName(e.target.value)}
              className="font-light"
            />
            {nameError && (
              <p className="text-red-400 text-xs w-1/2 ml-2">{nameError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <Input
              classNameInput="text-textLight border rounded-xl p-3 font-light w-52  border-black"
              typeInput="text"
              placeholderInput="Прізвище"
              value={surname}
              onChangeInput={(e) => setSurname(e.target.value)}
            />
            {surnameError && (
              <p className="text-red-400 text-xs w-1/2 ml-2">{surnameError}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <Input
            classNameInput="text-textLight border rounded-xl max-w-md p-3 mb-3 font-light w-full  border-black"
            typeInput="tel"
            placeholderInput="Номер телефону"
            value={phone}
            onChangeInput={(e) => setPhone(e.target.value)}
          />
          {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
          <Input
            classNameInput="text-textLight border rounded-xl max-w-md p-3 font-light"
            typeInput="email"
            placeholderInput="Електрона пошта"
            value={email}
            onChangeInput={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-xs ml-2">{emailError}</p>
          )}
        </div>

        <div className="flex flex-row mt-8 justify-between">
          <div className="flex flex-col gap-3">
            <Input
              classNameInput="text-textLight border rounded-xl max-w-md p-3 font-light w-52  border-black"
              typeInput="text"
              placeholderInput="Країна"
            />
            <Input
              classNameInput="text-textLight border rounded-xl max-w-md p-3 font-light w-52  border-black"
              typeInput="text"
              placeholderInput="Адреса"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Input
              classNameInput="text-textLight border rounded-xl max-w-md p-3 font-light w-52  border-black"
              typeInput="text"
              placeholderInput="Населений пункт"
            />
            <Input
              classNameInput="text-textLight border rounded-xl max-w-md p-3 font-light w-52  border-black"
              typeInput="text"
              placeholderInput="Поштовий індекс"
            />
          </div>
        </div>

        <Button
          classNameBtn="w-full bg-gray-dark mt-10 p-4 border rounded-xl font-bold text-18px text-white"
          nameBtn="submitForm"
          valueBtn="submit"
          type="submit"
        >
          Обрати спосіб доставки
        </Button>
        {formError && <p className="text-red-500 ml-2">{formError}</p>}
      </form>
    </div>
  );
};

export default ContactInfo;
