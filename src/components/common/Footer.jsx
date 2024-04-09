import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoWorldIsYours from '../../assets/icons/light/logo-light.svg';
import { mediaIcons } from '../../assets/icons/media-icons/mediaIcons';
import IconCopyright from '../../assets/icons/icon-copyright.svg';
import IconChat from '../../assets/icons/icon-chat.svg';
import IconArrowRight from '../../assets/icons/arrow-up.svg';
import NewsLetter from './NewsLetter';
import ChatPopup from '../main-page/ChatPopup';
import './media-queris.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      setIsEmailSubmitted(true);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      if (isValidEmail) {
        setIsEmailSubmitted(true);
        setEmail(''); // Clear the input field
      }
    }
  };

  return (
    <footer className='bg-gray-dark'>
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-10 justify-between pt-16 pb-5 mx-auto place-content-center place-items-center items-start'>
        <div className='social-media-block ml-10 '>
          <h1 className='text-white mb-5 font-inter text-20px'>Ваша пригода починається тут</h1>
          <img src={LogoWorldIsYours} alt='logo' />
          <div className='social-media-icons mt-6 mb-10 flex flex-row gap-4'>
            <a href='https://web.telegram.org/'>
              <img src={mediaIcons.IconTelegram} alt='icon telegram' />
            </a>
            <a href='https://www.instagram.com/'>
              <img src={mediaIcons.IconInstagram} alt='icon instagram' />
            </a>
            <a href='https://www.facebook.com/'>
              <img src={mediaIcons.IconFacebook} alt='icon facebook' />
            </a>
            <a href='https://www.tiktok.com/explore'>
              <img src={mediaIcons.IconTikTok} alt='icon tik-tok' />
            </a>
            <a href='https://www.youtube.com/'>
              <img src={mediaIcons.IconYouTube} alt='icon youtube' />
            </a>
          </div>
          <p className='flex flex-row text-white text-opacity-30 gap-1'>
            <img src={IconCopyright} alt='icon copyright' />
            WORLD IS YOURS. Всі права захищені
          </p>
        </div>
        <div className='reference-and-payments'>
          <h2 className='text-white mb-4 font-raleway text-20px'>Потрібна допомога?</h2>
          <div className='flex flex-row gap-8 mb-4'>
            <a href='#' onClick={() => setIsChatPopupOpen(true)}>
              <p className='flex flex-row text-white gap-2 text-16px'>
                <img src={IconChat} alt='icon chat' />
                Зв’яжись з нами
              </p>
            </a>
            <a href='#payment'>
              <p className='text-white text-opacity-30 text-16px'>не працює</p>
            </a>
          </div>
          <hr className='mb-4 text-white' />
          <p className='text-white font-raleway font-600 text-20px'>Довідка</p>
          <ul className='reference flex flex-col gap-3 mt-4'>
            <NavLink to='/info-help?component=payment' className='text-white font-raleway font-400 text-16px '>
              Оплата
            </NavLink>
            <NavLink to='/info-help?component=delivery' className='text-white font-raleway font-400 text-16px'>
              Доставка
            </NavLink>
            <NavLink to='/info-help?component=return' className='text-white font-raleway font-400 text-16px'>
              Повернення та обмін
            </NavLink>
          </ul>
        </div>
        <div className='mailing-list mr-10 '>
          <h2 className='text-white mb-4 font-raleway mb-0 text-20px'>Підпишиться на розсилку</h2>
          <p className='text-white text-opacity-30 font-raleway mt-1 mb-10 text-16px'>Щоб першим дізнаватися про новинки та знижки</p>
          <form className='relative' onSubmit={handleFormSubmit}>
            <input type='text' className={`bg-gray-dark p-3 text-white-500 border-2 border-${isValidEmail ? 'white' : 'red'}-500 rounded-lg w-full text-16px text-white`} placeholder='Введіть ел.пошту' value={email} onChange={handleEmailChange} onKeyDown={handleEnterKeyPress} />
            {!isValidEmail && <div className='text-red-500 absolute inset-x-0 top-14 mb-2 ml-3 text-sm'>Неправильний формат email</div>}
            {isEmailSubmitted && isValidEmail && <NewsLetter />}
            <div className='absolute inset-y-auto right-0 flex items-center pr-3 pointer-events-none'>
              <img src={IconArrowRight} alt='arrow right' className='text-red bg-red' />
            </div>
          </form>
        </div>
        {isChatPopupOpen && <ChatPopup onClose={() => setIsChatPopupOpen(false)} />}
      </div>
    </footer>
  );
};

export default Footer;
