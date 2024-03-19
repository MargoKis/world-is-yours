import React, { useState } from "react";
import LogoWorldIsYoursDark from "../../assets/icons/dark/logo-dark.svg";
import SearchIconDark from "../../assets/icons/dark/icon-search-dark.svg";
import { NavLink, useNavigate } from "react-router-dom";
import CartIconDark from "../../assets/icons/dark/icon-cart-dark.svg";
import HeartIconDark from "../../assets/icons/dark/icon-heart-dark.svg";

import ArrowDown from "../../assets/icons/arrow-up.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../../redux/localeSlice";
// import { setIsCategoriesOpen } from "../../redux/headerSlice";
import useTranslation from "../../locale/locales";
import Categories from "./Categories";
import SignUp from "../registration-popup/SignUp";
import RemindPas from "../registration-popup/RemindPas";
import LogIn from "../registration-popup/LogIn";
import SuccessMes from "../registration-popup/SuccessMes";
import LoginStatus from "../feature/header/loginStatus";

function Header() {
  const dispatch = useDispatch();

  const t = useTranslation();
  const locale = useSelector((state) => state.locale.locale);

  // const isCategoriesOpen = useSelector((state) => state.header.isCategoriesOpen);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const [isOpenSignUpPopup, setOpenSignUpPopup] = useState(false);
  const [isRemindPassOpen, setRemindPassOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSuccessMesOpen, setSuccessMesOpen] = useState(false);

  // scroll lock
  if (
    isOpenSignUpPopup ||
    isRemindPassOpen ||
    isLoginOpen ||
    isSuccessMesOpen ||
    isCategoriesOpen
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div className=" relative z-10">
        <div className="flex justify-between items-center px-10 bg-white text-custom-black drop-shadow-5xl ">
          <div className="flex justify-between items-center">
            <NavLink to={"/"}>
              <img src={LogoWorldIsYoursDark} alt="World Is Yours" />
            </NavLink>
            <div className="mx-10 text-center">
              <div
                className={`cursor-pointer ${
                  locale === "en" ? " underline" : "text-custom-black/30"
                }`}
                onClick={() => dispatch(setLocale({ locale: "en" }))}
              >
                ENG
              </div>

              <div
                className={`cursor-pointer ${
                  locale === "uk" ? " underline" : "text-custom-black/30"
                }`}
                onClick={() => dispatch(setLocale({ locale: "uk" }))}
              >
                UA
              </div>
            </div>
            <Search />
          </div>
          <ul className="flex justify-between items-center">
            <NavLink
              onClick={() => {
                if (window.location.pathname === "/world-is-yours") {
                  window.location.reload();
                }
              }}
              to={"/"}
            >
              <li className="mr-10 cursor-pointer">{t("HOME")}</li>
            </NavLink>
            <li
              onClick={() => setCategoriesOpen(true)}
              className="mr-10 cursor-pointer flex flex-row"
            >
              <img
                className={` w-3 mr-2 ${isCategoriesOpen ? "rotate-0" : "rotate-180"}`}
                src={ArrowDown}
                alt="arrow down"
              />
              {t("CATALOGUE")}
            </li>
            <li className="cursor-pointer">{t("CONTACTS")}</li>
          </ul>
          <div className="flex justify-between items-center ">
            <NavLink className="mr-10" to={"/cart"}>
              <img className="text-red-400" src={CartIconDark} alt="Cart" />
            </NavLink>
            <NavLink className="mr-10" to={"/favorites"}>
              <img src={HeartIconDark} alt="Favorites" />
            </NavLink>
            <LoginStatus setLoginOpen={() => setLoginOpen(true)} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {isCategoriesOpen && <Categories onClose={() => setCategoriesOpen(false)} />}
      </div>

      {/* isOpenSignUpPopup */}
      {isOpenSignUpPopup && (
        <SignUp
          onClose={() => setOpenSignUpPopup(false)}
          openLogin={() => {
            setOpenSignUpPopup(false);
            setLoginOpen(true);
          }}
          openSuccess={() => {
            setOpenSignUpPopup(false);
            // setSuccessMesOpen(true);
            console.log("user created");
          }}
          openRemindPass={() => {
            setOpenSignUpPopup(false);
            setRemindPassOpen(true);
          }}
        />
      )}

      {/* isRemindPassOpen */}
      {isRemindPassOpen && (
        <RemindPas
          onClose={() => setRemindPassOpen(false)}
          openLogin={() => {
            setRemindPassOpen(false);
            setLoginOpen(true);
          }}
          // openSuccess={openSuccess}
        />
      )}

      {/*isLoginOpen  */}
      {isLoginOpen && (
        <LogIn
          onClose={() => setLoginOpen(false)}
          openSignUp={() => {
            setLoginOpen(false);
            setOpenSignUpPopup(true);
          }}
          openSuccess={() => {
            setLoginOpen(false);
            // setSuccessMesOpen(true);
            console.log("user login");
          }}
          openRemindPass={() => {
            setLoginOpen(false);
            setRemindPassOpen(true);
          }}
        />
      )}

      {/* isSuccessMesOpen */}
      {isSuccessMesOpen && (
        <SuccessMes
          onClose={() => setSuccessMesOpen(false)}
          openLogin={() => {
            setSuccessMesOpen(false);
            setRemindPassOpen(false);
            setOpenSignUpPopup(false);
            setLoginOpen(true);
          }}
        />
      )}
    </>
  );
}

export default Header;

// search bar
const Search = () => {
  let navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/categories?${searchValue}`);
    }
  };

  return (
    <div>
      {isSearchOpen ? (
        <div className="StateClicked w-[400px] h-10 px-2.5 border-b border-neutral-800 inline-flex items-center gap-[15px]">
          <img
            onClick={() => navigate(`/categories?${searchValue}`)}
            className="cursor-pointer w-6 h-6"
            src={SearchIconDark}
            alt="Search"
          />
          <span className="text-neutral-800 text-lg font-medium font-['Raleway']">|</span>
          <input
            type="text"
            placeholder="Я шукаю..."
            className="grow shrink basis-0 h-[21px] bg-transparent text-neutral-400 text-base font-light font-['Raleway']  outline-none active:border-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <img
          onClick={() => setSearchOpen(!isSearchOpen)}
          className="cursor-pointer w-6 h-6"
          src={SearchIconDark}
          alt="Search"
        />
      )}
    </div>
  );
};
