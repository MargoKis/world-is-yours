import React, { useEffect } from 'react';
import globalStyle from './globalStyles.module.css';

function Categories({ onClose }) {
  const handleDocumentClick = (e) => {
    if (!e.target.closest('.Catalog') && !e.target.closest('.catalogue')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  return (
    <div className={globalStyle.categories}>
      <div className='Catalog bg-white pt-8 px-12 pb-12 text-xl text-custom-black font-semibold rounded-b-2xl'>
        <div className='mb-10'>
          <p className='text-base font-light pb-2'>Для вас</p>
          <ul className='flex gap-10'>
            <li>Одяг</li>
            <li>Взуття</li>
            <li>Аксесуари</li>
          </ul>
        </div>
        <div className='flex justify-between items-baseline mb-8 gap-4'>
          <div>
            <p className='text-base font-light pb-2'>Для автодому</p>
            <ul className='flex flex-col gap-5'>
              <li>Технічна підтримка автодому</li>
              <li>Устаткування для кемпінгу</li>
              <li>Кухонне обладнання</li>
            </ul>
          </div>
          <div>
            <p className='text-base font-light pb-2'>Додаткове</p>
            <ul className='flex flex-col gap-5'>
              <li>Подорожні товари</li>
              <li>Активний відпочинок</li>
            </ul>
          </div>
        </div>
        <svg className='mb-8' width='287' height='1' viewBox='0 0 287 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line y1='0.75' x2='287' y2='0.75' stroke='#646464' strokeWidth='0.5' />
        </svg>
        <ul className='flex flex-col gap-5'>
          <li>Автодомові аксесуари</li>
          <li>Комфорт та зручності</li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
