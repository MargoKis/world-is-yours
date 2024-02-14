import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { id: 1, title: 'Особливості', subtitle: 'Технології обтічного дизайну', content: 'Трекінгове взуття Salomon відзначається ергономічним та обтічним дизайном, що надає винятковий комфорт та підтримку під час активних пригод.' },
    { id: 2, title: 'Матеріал', subtitle: 'Тут має бути підзаголовок', content: 'Тут текст про матеріал' },
    { id: 3, title: 'Догляд', subtitle: 'Тут має бути підзаголовок', content: 'Тут текст про догляд' },
  ];

  const toggleAccordion = (id) => {
    setOpenIndex((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col space-y-2">
      {data.map((item) => (
        <div key={item.id} className="border-b-2 border-gray-300 rounded-md">
          <div
            className="flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => toggleAccordion(item.id)}
          >
            <p className="text-base">{item.title}</p>
            <span className="text-2xl">{openIndex === item.id ? '−' : '+'}</span>
          </div>
          {openIndex === item.id && (
            <div>
              <p className="px-4 py-1 font-medium font-Raleway text-base text-grayDark">{item.subtitle}</p>
              <p className="px-4 font-light">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;


