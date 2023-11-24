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

function MainPage() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRemindPassOpen, setIsRemindPassOpen] = useState(false);

  const openSignUpPopup = () => {
    setIsSignUpOpen(true);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsRemindPassOpen(false);
  };

  const openRemindPass = () => {
    setIsSignUpOpen(false);
    setIsRemindPassOpen(true);
    setIsLoginOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsRemindPassOpen(false);
  };

  const closePopups = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
    setIsRemindPassOpen(false);
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
        />
        <LogIn
          isOpen={isLoginOpen}
          onClose={closePopups}
          openSignUp={openSignUp}
          openRemindPass={openRemindPass}
        />
        {isCategoriesOpen && <Categories />}
        <div
          className={`flex flex-col h-3/5 justify-center items-center px-10 ${
            isCategoriesOpen ? "hidden" : "flex"
          }`}
        >
          <p className="text-center text-4xl mb-10">
            Ваша пригода починається тут
          </p>
          <img className="cursor-pointer" src={ArrowIcon} alt="Arrow Down" />
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
