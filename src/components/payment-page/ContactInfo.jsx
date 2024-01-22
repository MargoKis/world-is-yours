import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import FormSection from "./FormSection";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LogIn from "../registration-popup/LogIn";

const ContactInfo = ({
  handleDeliveryClick,
  handleContactInfoClick,
  handlePayClick,
  openPopup,
}) => {
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [birthdateError, setBirthdateError] = useState("");

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
    validateName(value);
  };

  const handleSurnameChange = (value) => {
    setSurname(value);
    validateSurname(value);
  };

  const handlePhoneChange = (value) => {
    const numericValue = value.replace(/\D/g, "");
    setPhone(numericValue);
    validatePhone(numericValue);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value);
  };

  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Name field is required");
      return false;
    }
    if (!/^[^\d\s]{3,16}$/.test(value)) {
      setNameError("Only letters from 3 to 16 characters");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateSurname = (value) => {
    if (!value.trim()) {
      setSurnameError("Surname field is required");
      return false;
    }
    if (!/^[^\d\s]{3,16}$/.test(value)) {
      setSurnameError("Only letters from 3 to 16 characters");
      return false;
    }
    setSurnameError("");
    return true;
  };

  const validatePhone = (value) => {
    if (!/^\d{10}$/.test(value)) {
      setPhoneError("Only 10-digit phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateEmail = (value) => {
    if (!value.trim()) {
      setEmailError("Email field is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validateBirthdate = (value) => {
    const birthdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

    if (!birthdateRegex.test(value)) {
      setBirthdateError("Use format: DD.MM.YYYY");
      return false;
    }

    setBirthdateError("");
    return true;
  };


  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isSurnameValid = validateSurname(surname);
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);
    const isBirthdateValid = validateBirthdate(birthdate);

    if (
      isNameValid &&
      isSurnameValid &&
      isPhoneValid &&
      isEmailValid &&
      isBirthdateValid
    ) {
      handleDeliveryClick();
    } else {
      setFormError("Please fill in the form correctly");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-raleway font-semibold text-35px mb-4">
        Оформлення замовлення
      </h1>
      <div className="flex flex-row mb-2 gap-6">
        <p className="text-decoration-line: underline cursor-pointer">
          Новий покупець{" "}
        </p>
        <p
          className="text-decoration-line: underline cursor-pointer"
          onClick={() => setPopupOpen(true)}
        >
          {" "}
          Я постійний клієнт
        </p>
      </div>
   
       {isPopupOpen && (
        <LogIn
          onClose={() => setPopupOpen(false)}
         
        />
      )}
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
        <p
          className="text-gray font-raleway font-semibold text-20px cursor-pointer"
          onClick={handlePayClick}
        >
          Оплата
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <FormSection
            label="Ім’я"
            value={name}
            onChange={handleNameChange}
            error={nameError}
            placeholder="Ім’я"
          />
          <FormSection
            label="Прізвище"
            value={surname}
            onChange={handleSurnameChange}
            error={surnameError}
            placeholder="Прізвище"
          />
        </div>

        <div className="flex flex-col mt-6">
          <label
            htmlFor="tel"
            className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
          >
            Номер телефону
          </label>
          <Input
            classNameInput="text-textLight border rounded-xl p-3 font-light w-3/4 border-black font-raleway text-base"
            typeInput="tel"
            placeholderInput="Номер телефону"
            value={phone}
            onChangeInput={(e) => handlePhoneChange(e.target.value)}
          />
          {phoneError && (
            <p className="text-red-500 text-xs mb-3 ml-1">{phoneError}</p>
          )}
          <label
            htmlFor="email"
            className="mb-1 ml-1 mt-6 text-textLight font-medium font-raleway text-sm"
          >
            Електронна пошта
          </label>
          <Input
            classNameInput="text-textLight border rounded-xl w-3/4 p-3 font-light text-base font-raleway"
            typeInput="email"
            placeholderInput="Електронна пошта"
            value={email}
            onChangeInput={(e) => handleEmailChange(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-xs ml-1">{emailError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1 mt-6">
          <label
            htmlFor="name"
            className="ml-1 text-textLight font-medium font-raleway text-sm"
          >
            День народження
          </label>
          <DatePicker
            className="text-textLight border rounded-xl w-32 p-3 pl-5 font-light border-black font-raleway text-base"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd.MM.yyyy"
            placeholderText="dd.mm.yyyy"
          />
        </div>

        <Button
          classNameBtn="w-full bg-gray-dark mt-10 p-4 border rounded-xl font-bold text-18px text-white"
          nameBtn="submitForm"
          valueBtn="submit"
          type="submit"
        >
          Обрати спосіб доставки
        </Button>
        {formError && <p className="text-red-500 ml-1">{formError}</p>}
      </form>
    </div>
  );
};

export default ContactInfo;
