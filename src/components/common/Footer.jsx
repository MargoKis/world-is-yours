import React from "react";
import LogoWorldIsYours from "../../assets/icons/logo.svg";
import { mediaIcons } from "../../assets/icons/media-icons/mediaIcons";
import IconCopyright from "../../assets/icons/icon-copyright.svg";
import IconChat from "../../assets/icons/icon-chat.svg";
import IconArrowRight from "../../assets/icons/icon-arrow-right.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row bg-gray-dark justify-around">
        <div className="social-media-block ">
          <h1 className="text-white mb-5 font-inter">
            Ваша пригода починається тут
          </h1>
          <img src={LogoWorldIsYours} alt="logo" />
          <div className="social-media-icons mt-6 mb-10 flex flex-row gap-4">
            <img src={mediaIcons.IconTelegram} alt="icon-telegram" className="hover:fill-white"/>
            <img src={mediaIcons.IconInstagram} alt="icon-instagram" />
            <img src={mediaIcons.IconFacebook} alt="icon-telegram" />
            <img src={mediaIcons.IconTikTok} alt="icon-telegram" />
            <img src={mediaIcons.IconYouTube} alt="icon-telegram" />
          </div>
          <p className="flex flex-row text-white text-opacity-30 gap-1">
            <img src={IconCopyright} />
            WORLD IS YOURS. Всі права захищені
          </p>
        </div>
        <div className="reference-and-payments">
          <h2 className="">
            <h2 className="text-white mb-4 font-inter">Потрібна допомога?</h2>
            <div className="flex flex-row gap-8 mb-4">
              <p className="flex flex-row text-white gap-2">
                <img src={IconChat} />
                Розпочни чат
              </p>
              <p className="text-white text-opacity-30">не працює</p>
            </div>
            <hr className="mb-4" />
          </h2>
          <ul className="reference flex flex-col gap-3">
            <li className="text-white font-inter font-600"><a href='#reference' className=''>Довідка</a></li>
            <li className="text-white font-inter font-400"><a href='#payment' className=''>Оплата</a></li>
            <li className="text-white font-inter"><a href='#delivery' className=''>Доставка</a></li>
            <li className="text-white font-inter"><a href='#returns' className=''>Повернення та обмін</a></li>
          </ul>
        </div>
        <div className="mailing-list">
          <h2 className="text-white mb-4 font-inter mb-0">
            Підпішиться на розсилку
          </h2>
          <p className="text-white text-opacity-30 font-inter mt-1 mb-10">
            Щоб першим дізнаватися про новинки та знижки
          </p>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-dark p-3 text-white-500 border-2 border-white-500 rounded-lg w-full"
              placeholder="Введіть ел.пошту"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src={IconArrowRight}
                alt="arrow-right"
                className="h-5 w-5 text-white transition-transform transform scale-100 hover:scale-210"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
