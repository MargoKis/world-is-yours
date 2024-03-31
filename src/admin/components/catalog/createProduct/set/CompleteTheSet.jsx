import React, { useState } from "react";
import CategoryDropdown from "../../CategoryDropdown";
import ProductsList from "./ProductsList";

const CompleteTheSet = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (selectedProduct, isSelected) => {
    if (isSelected && selectedProducts.length < 4) {
      setSelectedProducts([...selectedProducts, selectedProduct]);
    } else {
      setSelectedProducts(selectedProducts.filter((product) => product.code !== selectedProduct.code));
    }
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-5 ml-7 mt-6">
        {selectedProducts.map((selectedProduct, index) => (
          <div
            key={index}
            className="w-72 h-96 border border-gray align-center rounded-xl flex justify-center items-center"
          >
            {selectedProduct.photo && ( 
              <img src={selectedProduct.photo} alt={selectedProduct.name} className="h-80" />
            )}
            <div className="text-gray font-Raleway text-xl font-semibold text-center">
              <p>{selectedProduct.name}</p>
              <p>{selectedProduct.price}</p>
            </div>
          </div>
        ))}
        {Array.from({ length: 4 - selectedProducts.length }).map((_, index) => (
          <div
            key={index}
            className="w-72 h-96 border border-gray align-center rounded-xl flex justify-center items-center"
          >
            <p className="text-gray font-Raleway text-xl font-semibold text-center ">
              Оберіть товар <br /> у таблиці
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap mt-8 justify-between">
        <CategoryDropdown />
        <ProductsList onProductSelect={handleProductSelect} />
      </div>
    </div>
  );
};

export default CompleteTheSet;




