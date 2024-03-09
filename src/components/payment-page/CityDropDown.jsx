import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ArrowDown from "../../assets/icons/arrow-up.svg";

const CityDropdown = ({ selectedCountry, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/cities",
          {
            country: selectedCountry
          }
        );

        console.log("API response:", response.data);

        const citiesData = response.data.data;

        if (citiesData && citiesData.length > 0) {
          setCities(citiesData);
        } else {
          console.warn("API не вернул список городов.");
        }
      } catch (error) {
        console.error("Ошибка при получении списка городов:", error);
      }
    };

    if (selectedCountry) {
      fetchCities();
    }
  }, [selectedCountry, onSelectCity]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    onSelectCity(city);
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
        className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
      >
        Місто
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
          {selectedCity ? selectedCity : "Выберите город"}
          <img
            src={ArrowDown}
            alt="стрелка вниз"
            className={`font-light w-4 ml-2 transform cursor-pointer ${
              isOpen ? "rotate-0" : "rotate-180"
            } transition-transform`}
          />
        </div>
        <ul
          className="select-options font-light z-50 mt-4 bg-white max-h-48 overflow-y-auto"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {cities.map((city, index) => (
            <li
              key={`${city}-${index}`}
              onClick={() => handleCityChange(city)}
              className={`border p-2 rounded-xl mt-2 border-black cursor-pointer ${
                selectedCity === city ? "is-selected" : ""
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CityDropdown;









