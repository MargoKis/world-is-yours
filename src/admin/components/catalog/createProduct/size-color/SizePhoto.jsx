import React, { useState } from "react";

const SizePhoto = () => {
  const [selectedSizeC, setSelectedSizeC] = useState(null);

  const clothingSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const [selectedSizeS, setSelectedSizeS] = useState(null);

  const shoeSizes = Array.from({ length: 11 }, (_, i) => i + 35);

  const ids = ["photo1", "photo2", "photo3", "photo4"];

  return (
    <div className="flex flex-col mt-6">
      <p>Розміри</p>
      <div className="flex flex-row mt-3">
        {clothingSizes.map((size) => (
          <div
            key={`clothing-${size}`}
            className={`relative w-8 h-8 mr-4 rounded-full bg-gray-500 cursor-pointer border border-gray ${
              selectedSizeC === `clothing-${size}` ? "bg-blue-500" : ""
            }`}
            style={{
              backgroundColor:
                selectedSizeC === `clothing-${size}` ? "#135CFB" : "",
            }}
            onClick={() => setSelectedSizeC(`clothing-${size}`)}
          >
            <span
              className={`text-gray text-sm flex justify-center items-center absolute inset-0 ${
                selectedSizeS === `clothing-${size}` ? "text-white" : ""
              }`}
            >
              {size}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-3">
        {shoeSizes.map((size) => (
          <div
            key={`shoe-${size}`}
            className={`relative w-8 h-8 mr-4 rounded-full bg-gray-500 cursor-pointer border border-gray ${
              selectedSizeS === `shoe-${size}` ? "bg-blue-500" : ""
            }`}
            style={{
              backgroundColor:
                selectedSizeS === `shoe-${size}` ? "#135CFB" : "",
            }}
            onClick={() => setSelectedSizeS(`shoe-${size}`)}
          >
            <span
              className={`text-gray text-sm flex justify-center items-center absolute inset-0 ${
                selectedSizeS === `shoe-${size}` ? "text-white" : ""
              }`}
            >
              {size}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-6">
        <p className="mb-3">Фото товару</p>
        <div className="flex flex-row gap-8">
          {ids.map((id) => (
            <div
              key={id}
              className="w-36 h-36 border border-gray rounded-xl flex justify-center items-center text-3xl cursor-pointer"
            >
              +
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizePhoto;
