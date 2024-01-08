import React from 'react';
import globalStyle from './globalStyles.module.css';
function Categories({onClose}) {
    
    const handleClickOverlay = (e) => {
        if (!e.target.closest('.Catalog'))  {
          onClose();
        }
      };

    return (
        <div className={globalStyle.overlay} onClick={handleClickOverlay}>
        <div className='Catalog absolute w-1/2 mx-auto bg-white pt-10 px-24 pb-24 text-xl text-custom-black font-semibold rounded-b-2xl'>
            <div className='mb-10'>
                <p className='text-base font-light pb-2'>Для вас</p>
                <ul className='flex'>
                    <li className='mr-6'>Одяг</li>
                    <li className='mr-6'>Взуття</li>
                    <li className='mr-6'>Аксесуари</li>
                </ul>
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <p className='text-base font-light pb-2'>Для автодому</p>
                    <ul>
                        <li className='mb-6'>Технічна підтримка автодому</li>
                        <li className='mb-6'>Устаткування для кемпінгу</li>
                        <li>Кухонне обладнання</li>
                    </ul>
                </div>
                <div>
                    <p className='text-base font-light pb-2'>Додаткове</p>
                    <ul>
                        <li className='mb-6'>Подорожні товари</li>
                        <li>Активний відпочинок</li>
                    </ul>
                </div>
            </div>
            <svg className='mb-6' width="287" height="1" viewBox="0 0 287 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.75" x2="287" y2="0.75" stroke="#646464" strokeWidth="0.5" />
            </svg>
            <ul>
                <li className='mb-6'>Автодомові аксесуари</li>
                <li>Комфорт та зручності</li>
            </ul>
        </div>
        </div>
    );
}

export default Categories;
