import React, { useState } from 'react';

const ShoeSizePicker = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const shoeSizes = Array.from({ length: 7 }, (_, i) => i + 36);

  return (
    <div className='flex flex-row mt-3'>
      {shoeSizes.map((size) => (
        <div
          key={`shoe-${size}`}
          className={`font-sans relative w-8 h-8 mr-4 rounded-full bg-gray-500 duration-300 cursor-pointer border border-gray-800 ${selectedSize === `shoe-${size}` ? 'bg-blue-500' : ''}`}
          style={{ backgroundColor: selectedSize === `shoe-${size}` ? '#135CFB' : '' }}
          onClick={() => setSelectedSize(`shoe-${size}`)}>
          <span className={`text-gray text-sm flex justify-center items-center absolute inset-0 ${selectedSize === `shoe-${size}` ? 'text-white' : ''}`}>{size}</span>
        </div>
      ))}
    </div>
  );
};

export default ShoeSizePicker;
