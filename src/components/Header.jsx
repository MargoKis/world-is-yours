import React from 'react';
import LogoWorldIsYours from '../assets/icons/logo.svg'
import SearchIcon from '../assets/icons/icon-search.svg'
import CartIcon from '../assets/icons/icon-cart.svg'
import HeartIcon from '../assets/icons/icon-heart.svg'
import ArrowIcon from '../assets/icons/icon-arrow.svg'
import ProfileIcon from '../assets/icons/icon-profile.svg'
import ChatIcon from '../assets/icons/button_chat.svg'
import {Link, NavLink} from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
    return (
        <div className='h-screen bg-header bg-cover bg-no-repeat bg-bottom text-white'>
            <div className='h-1/3'>
                <div className='bg-custom-black py-2 mx-auto px-10'>
                    <p className='text-center'><Link to={'/'}>Приєднатися до збору коштів</Link></p>
                </div>
                <NavBar/>
            </div>
            <div className='flex flex-col justify-center items-center h-1/3 px-10'>
                <p className='text-center text-4xl mb-10'>Ваша пригода починається з нами</p>
                <img src={ArrowIcon} alt="Arrow Down"/>
            </div>
            <div className='flex flex-row-reverse items-center h-1/3 px-10'>
                <img className='scale-75' src={ChatIcon} alt="Arrow Down"/>
            </div>

        </div>
    );
}

export default Header;
