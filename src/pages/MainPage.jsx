import React, { useState } from "react";
import ArrowIcon from "../assets/icons/icon-arrow.svg";
import ChatIcon from "../assets/icons/button_chat.svg";
import Categories from "../components/common/Categories";
import DonateBanner from "../components/common/DonateBanner";
import Header from "../components/common/Header";
import WhyUs from "../components/main-page/WhyUs";
import SeasonSelect from "../components/main-page/SeasonSelect";
import FavouritesCardList from "../components/main-page/FavouritesCardList";
import NewArrivalsCardList from "../components/main-page/NewArrivalsCardList";
import ScrollingText from "../components/scrolling-effect/ScrollingText";
import Footer from "../components/common/Footer";
import SignUp from "../components/registration-popup/SignUp";
import LogIn from "../components/registration-popup/LogIn";
import RemindPas from "../components/registration-popup/RemindPas";
import SuccessMes from "../components/registration-popup/SuccessMes";
import useTranslation  from "../locale/locales";


function MainPage() {
  const t = useTranslation();

  


 
  





  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRemindPassOpen, setIsRemindPassOpen] = useState(false);
  const [isSuccessMesOpen, setIsSuccessMesOpen] = useState(false);

  const openSignUpPopup = () => {
    setIsSignUpOpen(true);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsRemindPassOpen(false);
    setIsSuccessMesOpen(false);
  };

  const openRemindPass = () => {
    setIsSignUpOpen(false);
    setIsRemindPassOpen(true);
    setIsLoginOpen(false);
    setIsSuccessMesOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsRemindPassOpen(false);
    setIsSuccessMesOpen(false);
  };

  const closePopups = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
    setIsRemindPassOpen(false);
    setIsSuccessMesOpen(false);
  };

  const openSuccess = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
    setIsRemindPassOpen(false);
    setIsSuccessMesOpen(true);
  };




  return (
    <div className="h-screen bg-header bg-cover bg-no-repeat bg-bottom text-white">
      <div
        className={`h-full ${
          isCategoriesOpen ? "backdrop-blur-sm" : "backdrop-blur-none"
        }`}
      >
        <div className="h-1/5">
          <DonateBanner />
          <Header
            isCategoriesOpen={isCategoriesOpen}
            setIsCategoriesOpen={setIsCategoriesOpen}
            openSignUpPopup={openSignUpPopup}
          />
        </div>
        <SignUp
          isOpen={isSignUpOpen}
          onClose={closePopups}
          openLogin={openLogin}
          openRemindPass={openRemindPass}
        />
        <RemindPas
          isOpen={isRemindPassOpen}
          onClose={closePopups}
          openLogin={openLogin}
          openSuccess={openSuccess}
        />
        <LogIn
          isOpen={isLoginOpen}
          onClose={closePopups}
          openSignUp={openSignUp}
          openRemindPass={openRemindPass}
          
        />
        <SuccessMes
          isOpen={isSuccessMesOpen}
          onClose={closePopups}
          openLogin={openLogin}
          openSuccess={openSuccess}
        />
        {isCategoriesOpen && <Categories />}
        <div
          className={`flex flex-col h-3/5 justify-center items-center px-10 ${
            isCategoriesOpen ? "hidden" : "flex"
          }`}
        >
          <p className="text-center text-4xl mb-10">
            {/* Ваша пригода починається тут */}
            {t('Your adventure starts here')}
          </p>
          <a href="#sectionFav">
            <img  className="cursor-pointer" src={ArrowIcon} alt="Arrow Down" />
          </a>
        </div>
        <div
          className={`flex flex-row-reverse h-1/5 items-center px-10 ${
            isCategoriesOpen ? "hidden" : "flex"
          }`}
        >
          <img className="scale-75" src={ChatIcon} alt="Arrow Down" />
        </div>
      </div>
      <SeasonSelect />
      <FavouritesCardList />
      <ScrollingText />
      <NewArrivalsCardList />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default MainPage;