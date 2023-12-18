import React from "react";
import LogoWorldIsYoursDark from "../../assets/icons/dark/logo-dark.svg";
import SearchIconDark from "../../assets/icons/dark/icon-search-dark.svg";
import { NavLink } from "react-router-dom";
import CartIconDark from "../../assets/icons/dark/icon-cart-dark.svg";
import HeartIconDark from "../../assets/icons/dark/icon-heart-dark.svg";
import ProfileIconDark from "../../assets/icons/dark/icon-profile-dark.svg";
import ArrowDown from "../../assets/icons/arrow-up.svg";

function Header({ isCategoriesOpen, setIsCategoriesOpen, openSignUpPopup }) {
  return (
    <div className="flex justify-between items-center px-10 bg-white text-custom-black drop-shadow-5xl ">
      <div className="flex justify-between items-center">
        <NavLink to={"/"}>
          <img src={LogoWorldIsYoursDark} alt="World Is Yours" />
        </NavLink>
        <div className="mx-10 text-center">
          <div className="text-custom-black/30 cursor-pointer">ENG</div>
          <div className="underline cursor-pointer">UA</div>
        </div>
        <img className="cursor-pointer" src={SearchIconDark} alt="Search" />
      </div>
      <ul className="flex justify-between items-center">
        <li className="mr-10 cursor-pointer">ГОЛОВНА</li>
        <li
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="mr-10 cursor-pointer flex flex-row"
        >
          <img
            className={` w-3 mr-2 ${
              isCategoriesOpen ? "rotate-0" : "rotate-180"
            }`}
            src={ArrowDown}
            alt="arrow down"
          />
          КАТАЛОГ
        </li>
        <li className="cursor-pointer">КОНТАКТИ</li>
      </ul>
      <div className="flex justify-between items-center ">
        <NavLink className="mr-10" to={"#"}>
          <img className="text-red-400" src={CartIconDark} alt="Cart" />
        </NavLink>
        <NavLink className="mr-10" to={"#"}>
          <img src={HeartIconDark} alt="Favorites" />
        </NavLink>
        <NavLink to={"#"} onClick={openSignUpPopup}>
          <img src={ProfileIconDark} alt="Profile" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
