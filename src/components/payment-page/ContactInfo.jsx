import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import FormSection from "./FormSection";
import { useSelector } from "react-redux";

const ContactInfo = ({
  handleDeliveryClick,
  handleContactInfoClick,
  handlePayClick,
  openPopup,
}) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);


<<<<<<< HEAD
=======
const ContactInfo = ({ handleDeliveryClick, handleContactInfoClick, handlePayClick}) => {
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
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

  const handleBirthdateChange = (value) => {
    setBirthdate(value);
    validateBirthdate(value);
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
<<<<<<< HEAD
      {isLoggedIn ? (
        <p>I know you</p>
      ) : (
        <>
          <p>You are new here</p>
          <Button onClick={handleLogin}>Login</Button>
        </>
      )}
=======
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
        <p
          className="text-gray font-raleway font-semibold text-20px cursor-pointer"
          onClick={handlePayClick}
        >
          Оплата
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label
              for="name"
              className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
            >
              Ім’я
            </label>
            <Input
              classNameInput="font-light text-base text-gray border rounded-xl p-3 w-52 border-black font-raleway" // font-raleway
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
            <label
              for="name"
              className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
            >
              Прізвище
            </label>
            <Input
              classNameInput="text-textLight border rounded-xl p-3 font-light w-52 border-black font-raleway text-base"
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
          <label
            for="tel"
            className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
          >
            Номер телефону
          </label>
          <Input
            classNameInput="text-textLight border rounded-xl p-3 mb-3 font-light w-3/4 border-black font-raleway text-base"
            typeInput="tel"
            placeholderInput="Номер телефону"
            value={phone}
            onChangeInput={(e) => setPhone(e.target.value)}
          />
          {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
          <label
            for="name"
            className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
          >
            Електронна пошта
          </label>
          <Input
            classNameInput="text-textLight border rounded-xl w-3/4 p-3 font-light text-base font-raleway"
            typeInput="email"
            placeholderInput="Електронна пошта"
            value={email}
            onChangeInput={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-xs ml-2">{emailError}</p>
          )}
        </div>

        <div className="flex flex-row mt-8 justify-between">
          <div className="flex flex-col gap-1">
            <label
              for="name"
              className="ml-2 text-textLight font-medium font-raleway text-sm"
            >
              День народження
            </label>
            <Input
              classNameInput="text-textLight border rounded-xl w-3/5 p-3 pl-6 font-light border-black font-raleway text-base"
              typeInput="text"
              placeholderInput="00.00.0000"
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
>>>>>>> 5b95ddb60179bfdd8d2a3550404b533fddfa2eb0
    </div>

    // <div className="flex flex-col">
    //   <h1 className="font-raleway font-semibold text-35px mb-4">
    //     Оформлення замовлення
    //   </h1>
    //   <div className="flex flex-row mb-2 gap-6">
    //     <p className="text-decoration-line: underline cursor-pointer">Новий покупець </p>
    //     <p className="text-decoration-line: underline cursor-pointer" onClick={openPopup}> Я постійний клієнт</p>
    //   </div>
    //   <div className="flex flex-row justify-between mb-10">
    //     <p
    //       className="font-raleway font-semibold text-20px text-blue"
    //       onClick={handleContactInfoClick}
    //     >
    //       Контактна інформація
    //     </p>
    //     <p
    //       className="text-gray font-raleway font-semibold text-20px cursor-pointer"
    //       onClick={handleDeliveryClick}
    //     >
    //       Доставка
    //     </p>
    //     <p
    //       className="text-gray font-raleway font-semibold text-20px cursor-pointer"
    //       onClick={handlePayClick}
    //     >
    //       Оплата
    //     </p>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     <div className="flex flex-row justify-between">

    //       <FormSection
    //         label="Ім’я"
    //         value={name}
    //         onChange={handleNameChange}
    //         error={nameError}
    //         placeholder="Ім’я"
    //       />
    //       <FormSection
    //         label="Прізвище"
    //         value={surname}
    //         onChange={handleSurnameChange}
    //         error={surnameError}
    //         placeholder="Прізвище"
    //       />
    //     </div>

    //     <div className="flex flex-col mt-8">
    //     <FormSection
    //         label="Номер телефону"
    //         value={phone}
    //         onChange={handlePhoneChange}
    //         error={phoneError}
    //         placeholder="Номер телефону"
    //         type="tel"
    //         className="w-3/4"
    //       />
    //       <label
    //         htmlFor="tel"
    //         className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
    //       >
    //         Номер телефону
    //       </label>
    //       <Input
    //         classNameInput="text-textLight border rounded-xl p-3 font-light w-3/4 border-black font-raleway text-base"
    //         typeInput="tel"
    //         placeholderInput="Номер телефону"
    //         value={phone}
    //         onChangeInput={(e) => handlePhoneChange(e.target.value)}
    //       />
    //       {phoneError && (
    //         <p className="text-red-500 text-xs mb-3 ml-2">{phoneError}</p>
    //       )}
    //       <label
    //         htmlFor="email"
    //         className="mb-1 ml-2 mt-4 text-textLight font-medium font-raleway text-sm"
    //       >
    //         Електронна пошта
    //       </label>
    //       <Input
    //         classNameInput="text-textLight border rounded-xl w-3/4 p-3 font-light text-base font-raleway"
    //         typeInput="email"
    //         placeholderInput="Електронна пошта"
    //         value={email}
    //         onChangeInput={(e) => handleEmailChange(e.target.value)}
    //       />
    //       {emailError && (
    //         <p className="text-red-500 text-xs ml-2">{emailError}</p>
    //       )}
    //     </div>

    //     <div className="flex flex-row mt-8 justify-between">
    //       <div className="flex flex-col gap-1">
    //         <label
    //           htmlFor="name"
    //           className="ml-2 text-textLight font-medium font-raleway text-sm"
    //         >
    //           День народження
    //         </label>
    //         <Input
    //           classNameInput="text-textLight border rounded-xl w-3/5 p-3 pl-5 font-light border-black font-raleway text-base"
    //           typeInput="text"
    //           placeholderInput="00.00.0000"
    //           value={birthdate}
    //           onChangeInput={(e) => handleBirthdateChange(e.target.value)}
    //         />
    //         {birthdateError && (
    //           <p className="text-red-500 text-xs mb-3 ml-2">{birthdateError}</p>
    //         )}
    //       </div>
    //     </div>

    //     <Button
    //       classNameBtn="w-full bg-gray-dark mt-10 p-4 border rounded-xl font-bold text-18px text-white"
    //       nameBtn="submitForm"
    //       valueBtn="submit"
    //       type="submit"
    //     >
    //       Обрати спосіб доставки
    //     </Button>
    //     {formError && <p className="text-red-500 ml-2">{formError}</p>}
    //   </form>
    // </div>
  );
};

export default ContactInfo;
