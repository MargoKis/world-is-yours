import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Catalog({ onClose }) {
  const catalogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-20 left-0 right-0 z-50 flex justify-center">
      <div
        ref={catalogRef}
        className="Catalog w-1/2 bg-white mt-8 pt-10 px-16 pb-16 text-xl text-custom-black font-semibold rounded-b-2xl relative"
      >
        <div className="mb-10">
          <p className="text-base font-light pb-2">Для вас</p>
          <ul className="flex">
            <li className="mr-6 hover:text-blue cursor-pointer">Одяг</li>
            <li className="mr-6 hover:text-blue cursor-pointer">Взуття</li>
            <li className="mr-6 hover:text-blue cursor-pointer">Аксесуари</li>
          </ul>
        </div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-base font-light pb-2">Для автодому</p>
            <ul>
              <li className="mb-6 hover:text-blue cursor-pointer">
                Технічна підтримка автодому
              </li>
              <li className="mb-6 hover:text-blue cursor-pointer">
                Устаткування для кемпінгу
              </li>
              <li className="hover:text-blue cursor-pointer">
                Кухонне обладнання
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light pb-2">Додаткове</p>
            <ul>
              <li className="mb-6 hover:text-blue cursor-pointer">
                Подорожні товари
              </li>
              <li className="hover:text-blue cursor-pointer">
                Активний відпочинок
              </li>
            </ul>
          </div>
        </div>
        <svg
          className="mb-6"
          width="287"
          height="1"
          viewBox="0 0 287 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="0.75"
            x2="287"
            y2="0.75"
            stroke="#646464"
            strokeWidth="0.5"
          />
        </svg>
        <div className="flex justify-between items-center">
          <ul className="mr-10">
            <li className="mb-6 hover:text-blue cursor-pointer">
              Автодомові аксесуари
            </li>
            <li className="hover:text-blue cursor-pointer">
              Комфорт та зручності
            </li>
          </ul>
          <div className="flex items-center">
            <Link
              to="/categories"
              className="text-blue mr-2 mb-1 cursor-pointer"
              onClick={handleLinkClick}
            >
              Усі категорії
            </Link>
            <Link
              to="/categories"
              className="text-blue cursor-pointer"
              onClick={handleLinkClick}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 7.41L12 12l-4.59 4.59L8.83 18l6-6-6-6-1.42 1.41z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
