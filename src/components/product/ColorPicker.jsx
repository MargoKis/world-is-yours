import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex flex-row mt-3">
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-red-500 cursor-pointer ${
          selectedColor === "red" ? "border border-blue-500 p-2 border-2" : ""
        }`}
        onClick={() => setSelectedColor("red")}
      ></div>
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-green-500 cursor-pointer ${
          selectedColor === "green" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("green")}
      ></div>
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-yellow-500 cursor-pointer ${
          selectedColor === "yellow" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("yellow")}
      ></div>
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-purple-500 cursor-pointer ${
          selectedColor === "purple" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("purple")}
      ></div>
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-pink-500 cursor-pointer ${
          selectedColor === "pink" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("pink")}
      ></div>
      <div
        className={`w-8 h-8 mr-4 rounded-full bg-black cursor-pointer ${
          selectedColor === "black" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("brown")}
      ></div>
      <div
        className={`w-8 h-8 rounded-full bg-white cursor-pointer border ${
          selectedColor === "white" ? "border border-blue-500 border-2" : ""
        }`}
        onClick={() => setSelectedColor("white")}
      ></div>
    </div>
  );
};

export default ColorPicker;
