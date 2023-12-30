import React, { useState } from "react";
import LogoWorldIsYoursDark from "../../assets/icons/dark/logo-dark.svg";
import SearchIconDark from "../../assets/icons/dark/icon-search-dark.svg";
import { NavLink } from "react-router-dom";
import CartIconDark from "../../assets/icons/dark/icon-cart-dark.svg";
import HeartIconDark from "../../assets/icons/dark/icon-heart-dark.svg";
import ProfileIconDark from "../../assets/icons/dark/icon-profile-dark.svg";
import ArrowDown from "../../assets/icons/arrow-up.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../../redux/localeSlice";
import { setIsCategoriesOpen } from "../../redux/headerSlice";
import useTranslation from "../../locale/locales";
import Categories from "./Categories";
import SignUp from "../registration-popup/SignUp";

function Header() {
  const dispatch = useDispatch();

  const t = useTranslation();
  // const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOpenSignUpPopup, setOpenSignUpPopup] = useState(false);

  const locale = useSelector((state) => state.locale.locale);
  const isCategoriesOpen = useSelector((state) => state.header.isCategoriesOpen);








  return (
    <>
      <div className=" relative">
        <div className="flex justify-between items-center px-10 bg-white text-custom-black drop-shadow-5xl ">
          <div className="flex justify-between items-center">
            <NavLink to={"/"}>
              <img src={LogoWorldIsYoursDark} alt="World Is Yours" />
            </NavLink>
            <div className="mx-10 text-center">

              <div className={`cursor-pointer ${locale === 'en' ? ' underline' : 'text-custom-black/30'}`} onClick={() => dispatch(setLocale({ locale: 'en' }))}>
                ENG
              </div>

              <div className={`cursor-pointer ${locale === 'uk' ? ' underline' : 'text-custom-black/30'}`} onClick={() => dispatch(setLocale({ locale: 'uk' }))}>
                UA
              </div>


            </div>
            <img className="cursor-pointer" src={SearchIconDark} alt="Search" />
          </div>
          <ul className="flex justify-between items-center">
            <li className="mr-10 cursor-pointer">{t("HOME")}</li>
            <li onClick={() => dispatch(setIsCategoriesOpen({ isCategoriesOpen: !isCategoriesOpen }))} className="mr-10 cursor-pointer flex flex-row">
              <img
                className={` w-3 mr-2 ${isCategoriesOpen ? "rotate-0" : "rotate-180"}`} src={ArrowDown} alt="arrow down" />
                {t("CATALOGUE")}
            </li>
            <li className="cursor-pointer">{t("CONTACTS")}</li>
          </ul>
          <div className="flex justify-between items-center ">
            <NavLink className="mr-10" to={"#"}>
              <img className="text-red-400" src={CartIconDark} alt="Cart" />
            </NavLink>
            <NavLink className="mr-10" to={"#"}>
              <img src={HeartIconDark} alt="Favorites" />
            </NavLink>
            <NavLink to="#" onClick={() => setOpenSignUpPopup(true)}>
              <img src={ProfileIconDark} alt="Profile" />
            </NavLink>
          </div>
        </div>

      </div>
      <div className="flex justify-center">
        {isCategoriesOpen && <Categories />}
      </div>
      {isOpenSignUpPopup &&   <SignUp 
        onClose={()=>setOpenSignUpPopup(false)}
      /> }
    
    </>
  );
}

export default Header;
