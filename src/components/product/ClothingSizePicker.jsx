import React, { useState } from "react";

const ClothingSizePicker = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <div className="flex flex-row mt-3">
      {clothingSizes.map((size) => (
        <div
          key={`clothing-${size}`}
          className={`relative w-8 h-8 mr-4 rounded-full bg-gray-500 cursor-pointer border border-gray-800 ${
            selectedSize === `clothing-${size}` ? "bg-blue-500" : ""
          }`}
          style={{
            backgroundColor:
              selectedSize === `clothing-${size}` ? "#135CFB" : "",
          }}
          onClick={() => setSelectedSize(`clothing-${size}`)}
        >
          <span
            className={`text-gray text-sm flex justify-center items-center absolute inset-0 ${
              selectedSize === `clothing-${size}` ? "text-white" : ""
            }`}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClothingSizePicker;
