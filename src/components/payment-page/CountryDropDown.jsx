// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CountryDropdown = ({ onSelectCountry }) => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState('');

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const countriesData = response.data.map((country) => country.name.common);
//         setCountries(countriesData);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const handleCountryChange = (event) => {
//     const country = event.target.value;
//     setSelectedCountry(country);
//     onSelectCountry(country);
//   };

//   return (
//     <select value={selectedCountry} onChange={handleCountryChange}>
//       {countries.map((country) => (
//         <option key={country} value={country}>
//           {country}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CountryDropdown;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ArrowDown from "../../assets/icons/arrow-up.svg";

const CountryDropdown = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData = response.data.map(
          (country) => country.name.common
        );
        setCountries(countriesData.sort());
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    onSelectCountry(country);
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

  return (
    <>
      <label
        htmlFor="text"
        className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
      >
        Країна
      </label>
      <div
        ref={dropdownRef}
        className={`select ${
          isOpen ? "active" : ""
        } font-light border rounded-xl max-w-md p-3 border-black mb-4`}
      >
        <div
          className="select-styled font-light flex items-center justify-between max-w-md"
          onClick={toggleSelect}
        >
          {selectedCountry ? selectedCountry : "Select Country"}
          <img
            src={ArrowDown}
            alt="arrow down"
            className={`font-light w-4 ml-2 transform cursor-pointer ${
              isOpen ? "rotate-0" : "rotate-180"
            } transition-transform`}
          />
        </div>
        <ul
          className="select-options font-light z-50 mt-4 bg-white max-h-48 overflow-y-auto"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {countries.map((country) => (
            <li
              key={country}
              onClick={() => handleCountryChange(country)}
              className={`border p-2 rounded-xl mt-2 border-black cursor-pointer ${
                selectedCountry === country ? "is-selected" : ""
              }`}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CountryDropdown;
