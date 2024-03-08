import React, { useState } from 'react';
import ClothingSizePicker from '../product/ClothingSizePicker';

const CategoryFilters = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeButtons, setActiveButtons] = useState({});

  const data = [
    { id: 1, title: 'Впорядкувати за', btn: ['Акції', 'Кращі', 'Новинки', 'Ціна за зростанням', 'Ціна за спаданням'] },
    { id: 2, title: 'Для кого', btn: ['Чоловіки', 'Жінки'] },
    { id: 3, title: 'Розмір' },
    { id: 4, title: 'Ціна', btn: ['До 500 грн', 'До 1000 грн', 'До 2000 грн', 'Від 2000 грн'] },
  ];

  const toggleAccordion = (id) => {
    setOpenIndex((prevId) => (prevId === id ? null : id));
  };

  const toggleButton = (buttonId) => {
    setActiveButtons((prevActiveButtons) => ({
      ...prevActiveButtons,
      [buttonId]: !prevActiveButtons[buttonId],
    }));
  };

  return (
    <div className="flex flex-col py-2 px-8">
      {data.map((item) => (
        <div key={item.id} className="border-b-2 border-gray py-1">
          <div
            className="flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => toggleAccordion(item.id)}
          >
            <p className="text-base">{item.title}</p>
            <span className="text-2xl">{openIndex === item.id ? '−' : '+'}</span>
          </div>
          {openIndex === item.id && item.title === 'Розмір' && (
            <div className="mt-3 my-5">
              <ClothingSizePicker />
            </div>
          )}
          {openIndex === item.id && item.btn && item.title !== 'Розмір' && (
            <div className="flex flex-wrap my-5">
              {item.btn.map((btnText, id) => (
                <button
                  key={id}
                  className={`px-4 py-1 font-medium font-Raleway text-base border border-gray rounded-lg mr-2 mb-2 
                  ${activeButtons[btnText] ? 'bg-black text-white' : ''}`}
                  onClick={() => toggleButton(btnText)}
                >
                  {btnText}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;
