import React from "react";

const CategoryBox = () => {
  return (
    <div className="category w-96 h-full bg-darkWhite p-4 mb-6 rounded-2xl ml-8">
      <div className="category-title text-black font-semibold mb-4 text-xl ml-4">
        Категорії
      </div>
      <ul className="sub-categories ml-4">
        <li>
          <div className="category-item flex justify-between items-center cursor-pointer  mb-2">
            <p className="font-medium">Для вас</p>
          </div>
        </li>
        <li>
          <div className="category-item flex justify-between items-center cursor-pointer mb-2">
            <p className="font-medium">Для автодому</p>
          </div>
        </li>
        <li>
          <div className="category-item flex justify-between items-center cursor-pointer mb-2">
            <p className="font-medium">Додаткове</p>
          </div>
        </li>
      </ul>
      <p className="ml-4 text-blue font-medium cursor-pointer">
        <span className="text-3xl cursor-pointer">+ </span> Додати категорію
      </p>
    </div>
  );
};

export default CategoryBox;
