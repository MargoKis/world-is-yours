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
        className="select-options text-gray  z-50 mt-4 bg-white" //absolute
        style={{ display: isOpen ? "block" : "none" }}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option)}
            className={
              selectedOption === option
                ? "is-selected border p-2 rounded-2xl mt-2 "
                : "border p-2 rounded-2xl mt-2 w-1/2"
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








// import React, { useState } from "react";
// import ArrowDown from "../../assets/icons/arrow-up.svg";

// const DropDownList = ({ label, options }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const toggleSelect = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (option) => {
//     setSelectedOption(option.label);
//     setIsOpen(false);
//   };

//   return (
//     <div className="space-y-4 relative">
//       <div className={`relative w-full ${isOpen ? "z-50" : ""}`}>
//         <div
//           onClick={toggleSelect}
//           className="relative flex items-center w-full bg-white border border-gray-300 rounded p-2 cursor-pointer"
//         >
//           {selectedOption ? (
//             <div className="text-custom-black px-2">{selectedOption}</div>
//           ) : (
//             <div className="text-gray-500 px-2">{label}</div>
//           )}
//           <img
//             src={ArrowDown}
//             alt="arrow down"
//             className={`text-custom-black w-4 h-4 ml-2 transform absolute right-2 top-2 ${
//               isOpen ? "rotate-0" : "rotate-180"
//             } transition-transform`}
//           />
//         </div>
//         <ul
//           className={`select-options text-gray absolute w-full bg-white border border-gray-300 rounded p-2 mt-2 px-2 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option)}
//               className={
//                 selectedOption === option.label
//                   ? "is-selected cursor-pointer"
//                   : "cursor-pointer"
//               }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DropDownList;
















