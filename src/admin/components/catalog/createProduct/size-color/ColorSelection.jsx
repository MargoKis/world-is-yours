import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ColorSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState([
    { id: 1, name: "Білий", color: "#FFFFFF" },
    { id: 2, name: "Сірий", color: "#808080" },
    { id: 3, name: "Чорний", color: "#000000" },
    { id: 4, name: "Коричневий", color: "#A52A2A" },
    { id: 5, name: "Червоний", color: "#FF0000" },
    { id: 6, name: "Жовтий", color: "#FFFF00" },
    { id: 7, name: "Зелений", color: "#008000" },
    { id: 8, name: "Голубий", color: "#00FFFF" },
    { id: 9, name: "Синій", color: "#0000FF" },
    { id: 10, name: "Фіолетовий", color: "#800080" },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col w-72 h-full ml-8 mt-8 bg-darkWhite p-7 rounded-xl">
        <p className="text-lg text-gray mb-4">Кольори</p>
        <div
          onClick={toggleDropdown}
          className="flex items-center justify-between cursor-pointer p-5 bg-white rounded-xl text-gray relative"
        >
          {selectedColor ? (
            <div
              className="inline-block w-8 h-8 border border-gray rounded-full mr-2"
              style={{ backgroundColor: selectedColor.color }}
            ></div>
          ) : (
            <span className="inline-block w-8 h-8 border border-gray rounded-full bg-transparent border border-gray-500 mr-2"></span>
          )}
          {selectedColor ? selectedColor.name : "Оберіть колір"}{" "}
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
        {isOpen && (
          <div className="overflow-y-auto max-h-56 rounded-xl p-5 bg-white border border-gray mt-2">
            {colors.map((color, index) => (
              <div key={color.id}>
                {index !== 0 && <hr className="border-gray my-2" />}
                <div
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleColorSelect(color)}
                >
                  <div
                    className="w-8 h-8 rounded-full mr-2 border border-gray"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <p>{color.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelection;
