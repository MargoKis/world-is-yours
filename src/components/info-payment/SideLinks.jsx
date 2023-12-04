import React from 'react';

const SideLinks = ({ onLinkClick }) => {
  return (
    <div className="flex flex-col mr-28 gap-6">
      <p className="text-18px cursor-pointer" onClick={() => onLinkClick('payment')}>
        Оплата
      </p>
      <p className="text-18px cursor-pointer" onClick={() => onLinkClick('delivery')}>
        Доставка
      </p>
      <p className="whitespace-nowrap text-18px cursor-pointer" onClick={() => onLinkClick('return')}>
        Повернення та обмін
      </p>
    </div>
  );
};

export default SideLinks;