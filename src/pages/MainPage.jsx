import React from "react";
import ArrowIcon from "../assets/icons/icon-arrow.svg";
import ChatIcon from "../assets/icons/button_chat.svg";



import WhyUs from "../components/main-page/WhyUs";
import SeasonSelect from "../components/main-page/SeasonSelect";
import FavouritesCardList from "../components/main-page/FavouritesCardList";
import NewArrivalsCardList from "../components/main-page/NewArrivalsCardList";
import ScrollingText from "../components/scrolling-effect/ScrollingText";

// import SignUp from "../components/registration-popup/SignUp";
// import LogIn from "../components/registration-popup/LogIn";
// import RemindPas from "../components/registration-popup/RemindPas";
// import SuccessMes from "../components/registration-popup/SuccessMes";
import useTranslation from "../locale/locales";
import { useSelector } from "react-redux";


function MainPage() {
  const t = useTranslation();

  // catalog stage
  const isCategoriesOpen = useSelector((state) => state.header.isCategoriesOpen);







  return (
    <>

      <div
        className="bg-header bg-cover bg-no-repeat bg-bottom text-white"
        style={{ height: 'calc(100vh - 140px)' }}
        // - header and DonnateBanner height
      >
        <div className={`h-full ${isCategoriesOpen ? "backdrop-blur-sm" : "backdrop-blur-none"}`}> {/*blur owerlay */}

          {/* main page nav text */}
          <div className={`flex flex-col h-3/5 justify-center items-center px-10 ${isCategoriesOpen ? "hidden" : "flex"}`}>
            <p className="text-center text-4xl mb-10">
              {t('Your adventure starts here')}
            </p>
            <a href="#sectionFav">
              <img className="cursor-pointer" src={ArrowIcon} alt="Arrow Down" />
            </a>
          </div>




          {/* chat icon */}
          <div
            className={`flex flex-row-reverse h-1/5 items-center px-10 ${isCategoriesOpen ? "hidden" : "flex"}`}>
            <img className="scale-75" src={ChatIcon} alt="Arrow Down" />
          </div>



        </div>
      </div>
      <SeasonSelect />
      <FavouritesCardList />
      <ScrollingText />
      <NewArrivalsCardList />
      <WhyUs />
    </>

  );
}

export default MainPage;