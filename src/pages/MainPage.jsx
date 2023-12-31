import React from "react";
import { useState } from "react";
import ArrowIcon from "../assets/icons/icon-arrow.svg";
import ChatIcon from "../assets/icons/button_chat.svg";

// components
import WhyUs from "../components/main-page/WhyUs";
import SeasonSelect from "../components/main-page/SeasonSelect";
import FavouritesCardList from "../components/main-page/FavouritesCardList";
import NewArrivalsCardList from "../components/main-page/NewArrivalsCardList";
import ScrollingText from "../components/scrolling-effect/ScrollingText";
import ChatPopup from "../components/main-page/ChatPopup";

const MainPage = () => {
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  const toggleChatPopup = () => {
    setIsChatPopupOpen(!isChatPopupOpen);
  };
  return (
    <>
      <div
        className="bg-header bg-cover bg-no-repeat bg-bottom text-white"
        style={{ height: "calc(100vh - 140px)" }}
      >
        {/* minus header and DonnateBanner height*/}

        {/* main page nav text */}
        <div
          className={`flex flex-col h-4/5 justify-center items-center px-10 flex`}
        >
          <p className="text-center text-4xl mb-10">
            {("Your adventure starts here")}
          </p>
          <a href="#sectionFav">
            <img className="cursor-pointer" src={ArrowIcon} alt="Arrow Down" />
          </a>
        </div>

        {/* chat icon */}
        <div className={`flex flex-row-reverse h-1/5 items-center px-10 flex`}>
        <img
            className="scale-75 cursor-pointer"
            src={ChatIcon}
            alt="Arrow Down"
            onClick={toggleChatPopup}
          />

          {isChatPopupOpen && (
            <ChatPopup onClose={() => setIsChatPopupOpen(false)} />
          )}
        </div>
      </div>

      <SeasonSelect />
      <FavouritesCardList />
      <ScrollingText />
      <NewArrivalsCardList />
      <WhyUs />
    </>
  );
};

export default MainPage;