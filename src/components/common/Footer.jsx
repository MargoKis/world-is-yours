import React from "react";
 import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoWorldIsYours from "../../assets/icons/light/logo-light.svg";
import { mediaIcons } from "../../assets/icons/media-icons/mediaIcons";
import IconCopyright from "../../assets/icons/icon-copyright.svg";
import IconChat from "../../assets/icons/icon-chat.svg";
import IconArrowRight from "../../assets/icons/arrow-up.svg";
import SubscriptionSuccess from "../common/SubscriptionSuccess";
import './media-queris.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);

  useEffect(() => {
    // This effect runs when the successPopup state changes
    if (!successPopup) {
      // Clear input fields when the popup is closed
      clearInput();
    }
  }, [successPopup]);


  const handleInputChange = (event) => {
    setEmail(event.target.value);
    validateAndShowError();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      validateAndOpenPopup();
    }
  };

  const validateAndShowError = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Updated regex for a valid email format
    const isValid = emailRegex.test(email);
  
    setIsEmailValid(isValid);
  
    if (!isValid) {
      setEmailError('Некоректно введений email');
    } else {
      setEmailError(''); 
    }
  };

  const validateAndOpenPopup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    validateAndShowError();

    if (isValid) {
      setSuccessPopup(true);
    }
  };

  const clearInput = () => {
    setEmail('');
    setIsEmailValid(true);
    setEmailError('');
  };

  return (

      <footer className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-dark justify-between pt-16 pb-5 mx-auto place-content-center place-items-center  items-start">
        <div className="social-media-block ml-10 ">
          <h1 className="text-white mb-5 font-inter text-20px">
            Ваша пригода починається тут
          </h1>
          <img src={LogoWorldIsYours} alt="logo" />
          <div className="social-media-icons mt-6 mb-10 flex flex-row gap-4">
            <a href="/404/">
              <img src={mediaIcons.IconTelegram} alt="icon telegram" />
            </a>
            <a href="/404/">
              <img src={mediaIcons.IconInstagram} alt="icon instagram" />
            </a>
            <a href="/404/">
              <img src={mediaIcons.IconFacebook} alt="icon facebook" />
            </a>
            <a href="/404/">
              <img src={mediaIcons.IconTikTok} alt="icon tik-tok" />
            </a>
            <a href="/404/">
              <img src={mediaIcons.IconYouTube} alt="icon youtube" />
            </a>
          </div>
          <p className="flex flex-row text-white text-opacity-30 gap-1">
            <img src={IconCopyright} alt="icon copyright" />
            WORLD IS YOURS. Всі права захищені
          </p>
        </div>
        <div className="reference-and-payments">
          <h2 className="text-white mb-4 font-raleway text-20px">
            Потрібна допомога?
          </h2>
          <div className="flex flex-row gap-8 mb-4">
            <a href="/404/">
              <p className="flex flex-row text-white gap-2 text-16px">
                <img src={IconChat} alt="icon chat" />
                Зв’яжись з нами
              </p>
            </a>
            <a href="#payment">
              <p className="text-white text-opacity-30 text-16px">не працює</p>
            </a>
          </div>
          <hr className="mb-4 text-white" />
          <p className="text-white font-raleway font-600 text-20px">Довідка</p>
          <ul className="reference flex flex-col gap-3 mt-4">
            <NavLink
              to="/info-help?component=payment"
              className="text-white font-raleway font-400 text-16px "
              // activeClassName="active-link"
            >
              Оплата
            </NavLink>
              <NavLink
                to="/info-help?component=delivery"
                className="text-white font-raleway font-400 text-16px"
                // activeClassName="active-link"
              >
                Доставка
              </NavLink>
              <NavLink
                to="/info-help?component=return"
                className="text-white font-raleway font-400 text-16px"
                // activeClassName="active-link"
              >
                Повернення та обмін
              </NavLink>
          </ul>
        </div>
        <div className="mailing-list mr-10 ">
          <h2 className="text-white mb-4 font-raleway mb-0 text-20px">
            Підпишиться на розсилку
          </h2>
          <p className="text-white text-opacity-30 font-raleway mt-1 mb-10 text-16px">
            Щоб першим дізнаватися про новинки та знижки
          </p>
             <form className="relative">
          <input
          type="text"
          className={`bg-gray-dark p-3 text-white-500 border-2 border-white-500 rounded-lg w-full text-16px text-white ${
            isEmailValid ? '' : 'border-red-500'
          }`}
          placeholder="Введіть ел.пошту"
          value={email}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src={IconArrowRight} alt="arrow right" className="text-red bg-red" />
        </div>
        {emailError && (
          <div className="text-red-500 text-sm mt-1">{emailError}</div>
        )}
      </form>
      {successPopup && (
        <SubscriptionSuccess 
          onClose={() => setSuccessPopup(false)} 
          isOpen={successPopup} 
          clearInput={clearInput} 
        />
      )}
    </div>
  </footer>
  );
};

export default Footer;