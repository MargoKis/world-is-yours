import React from 'react';
import LogoWorldIsYours from "../assets/icons/logo.svg";
import SearchIcon from "../assets/icons/icon-search.svg";
import ArrowIcon from "../assets/icons/icon-arrow.svg";
import {NavLink} from "react-router-dom";
import CartIcon from "../assets/icons/icon-cart.svg";
import HeartIcon from "../assets/icons/icon-heart.svg";
import ProfileIcon from "../assets/icons/icon-profile.svg";

function NavBar(props) {
    return (
        <div className='flex justify-between items-center px-10'>
            <div className='flex justify-between items-center'>
                <img src={LogoWorldIsYours} alt="World Is Yours"/>
                <div className='mx-10 text-center'>
                    <div className='text-white/30'>ENG</div>
                    <div className='underline'>UA</div>
                </div>
                <img src={SearchIcon} alt='Search'/>
            </div>
            <ul className='flex justify-between items-center'>
                <li className='mr-10'>ГОЛОВНА</li>
                <li className='mr-10'>КАТАЛОГ</li>
                <li>КОНТАКТИ</li>
            </ul>
            <div className='flex justify-between items-center'>
                <NavLink className='mr-10' to={'/'}><img src={CartIcon} alt="Profile"/></NavLink>
                <NavLink className='mr-10' to={'/'}><img src={HeartIcon} alt="Favorites"/></NavLink>
                <NavLink to={'/'}><img src={ProfileIcon} alt="Cart"/></NavLink>
            </div>
        </div>
    );
}

export default NavBar;
