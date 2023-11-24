import React, { useState, useEffect, useRef } from "react";
import ArrowDown from "../../assets/icons/arrow-up.svg";

const DropDownList = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className={`select ${
        isOpen ? "active" : ""
      } text-custom-black border rounded-2xl max-w-md p-3 mb-10`}
    >
      <div
        className="select-styled text-custom-black flex flex-row justify-between max-w-md"
        onClick={toggleSelect}
      >
        {selectedOption ? selectedOption.label : label}
        <img
          src={ArrowDown}
          alt="arrow down"
          className={`text-custom-black w-4 mr-2 transform ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-transform`}
        />
      </div>
      <ul
        className="select-options text-gray z-50 mt-4 bg-white" //absolute
        style={{ display: isOpen ? "block" : "none" }}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option)}
            className={
              selectedOption === option
                ? "is-selected border p-2 rounded-2xl mt-2 w-1/2"
                : "border p-2 rounded-2xl mt-2 "
            }
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownList;