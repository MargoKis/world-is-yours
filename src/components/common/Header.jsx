import React, { useState, useEffect } from 'react';
import LogoWorldIsYoursDark from '../../assets/icons/dark/logo-dark.svg';
import SearchIconDark from '../../assets/icons/dark/icon-search-dark.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import CartIconDark from '../../assets/icons/dark/icon-cart-dark.svg';
import HeartIconDark from '../../assets/icons/dark/icon-heart-dark.svg';

import ArrowDown from '../../assets/icons/arrow-up.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../../redux/localeSlice';
// import { setIsCategoriesOpen } from "../../redux/headerSlice";
import DonateBanner from '../common/DonateBanner';
import useTranslation from '../../locale/locales';
import Categories from './Categories';
import SignUp from '../registration-popup/SignUp';
import RemindPas from '../registration-popup/RemindPas';
import LogIn from '../registration-popup/LogIn';
import SuccessMes from '../registration-popup/SuccessMes';
import LoginStatus from '../feature/header/loginStatus';

import globalStyle from './globalStyles.module.css';

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

  // toggle isOpen state
  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  // scroll lock
  if (isOpenSignUpPopup || isRemindPassOpen || isLoginOpen || isSuccessMesOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <header>
      <DonateBanner />
      <div className='relative z-10'>
        <div className='flex justify-between items-center px-10 bg-white text-custom-black drop-shadow-5xl '>
          <div className='flex justify-between items-center'>
            <NavLink to={'/'}>
              <img src={LogoWorldIsYoursDark} alt='World Is Yours' />
            </NavLink>
            <div className='mx-10 text-center'>
              <div className={`cursor-pointer ${locale === 'en' ? ' underline' : 'text-custom-black/30'}`} onClick={() => dispatch(setLocale({ locale: 'en' }))}>
                ENG
              </div>

              <div className={`cursor-pointer ${locale === 'uk' ? ' underline' : 'text-custom-black/30'}`} onClick={() => dispatch(setLocale({ locale: 'uk' }))}>
                UA
              </div>
            </div>
            <Search />
          </div>
          <ul className='flex justify-between items-center gap-10'>
            <li>
              <NavLink
                onClick={() => {
                  if (window.location.pathname === '/world-is-yours') {
                    window.location.reload();
                  }
                }}
                to={'/'}>
                {t('HOME')}
              </NavLink>
            </li>

            <li onClick={() => toggleCategories()} className='catalogue cursor-pointer flex flex-row gap-4'>
              {t('CATALOGUE')}
              <img className={`w-3 ${isCategoriesOpen ? 'rotate-0' : 'rotate-180'}`} src={ArrowDown} alt='arrow down' />
            </li>

            <li>
              <NavLink to={'/contacts'}>{t('CONTACTS')}</NavLink>
            </li>
          </ul>
          <div className='flex justify-between items-center '>
            <NavLink className='mr-10' to={'/cart'}>
              <img className='text-red-400' src={CartIconDark} alt='Cart' />
            </NavLink>
            <NavLink className='mr-10' to={'/favorites'}>
              <img src={HeartIconDark} alt='Favorites' />
            </NavLink>
            <LoginStatus setLoginOpen={() => setLoginOpen(true)} />
          </div>
        </div>
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
            console.log('user created');
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
            console.log('user login');
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
    </header>
  );
}

export default Header;

// search bar
const Search = () => {
  let navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/categories?${searchValue}`);
    }
  };

  const documentClickCheck = (e) => {
    if (!e.target.closest('.StateClicked')) {
      console.log('state clicked');
      setSearchOpen(false);
    } else {
      console.log('!isOpen');
    }
  };
  useEffect(() => {
    document.addEventListener('click', documentClickCheck);
    return () => {
      document.removeEventListener('click', documentClickCheck);
    };
  }, []);

  return (
    <div>
      {isSearchOpen ? (
        <div className={'StateClicked max-w-[400px] h-10 border-b border-neutral-800 inline-flex items-center gap-[15px]'} data-isOpen={`${isSearchOpen ? 'true' : 'false'}`}>
          <img onClick={() => navigate(`/categories?${searchValue}`)} className='cursor-pointer w-6 h-6' src={SearchIconDark} alt='Search' />
          <span className="text-neutral-800 text-lg font-medium font-['Raleway']">|</span>
          <input
            type='text'
            placeholder='Я шукаю...'
            className="grow shrink basis-0 h-[21px] bg-transparent text-neutral-400 text-base font-light font-['Raleway']  outline-none active:border-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <img onClick={() => setSearchOpen(true)} className='StateClicked cursor-pointer w-6 h-6' src={SearchIconDark} alt='Search' aria-haspopup='true' />
      )}
    </div>
  );
};
