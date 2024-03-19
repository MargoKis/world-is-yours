import React from "react";
import CategoryDropdown from "../../CategoryDropdown";
import ProductsList from "./ProductsList";

const CompleteTheSet = () => {
  const photos = ["photo1", "photo2", "photo3", "photo4"];
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-5 ml-7 mt-6">
        {photos.map((id) => (
          <div
            key={id}
            className="w-72 h-96 border border-gray align-center rounded-xl flex justify-center items-center"
          >
            <p className="text-gray font-Raleway text-xl font-semibold text-center ">
              Оберіть товар <br /> у таблиці
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-8 justify-between">
        <CategoryDropdown />
        <ProductsList />
      </div>
    </div>
  );
};

export default CompleteTheSet;
