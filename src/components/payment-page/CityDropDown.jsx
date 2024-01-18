import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArrowDown from "../../assets/icons/arrow-up.svg";

const CityDropdown = ({ selectedCountry, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://api.geonames.org/searchJSON?name_startsWith=${selectedCountry}&maxRows=10&username=demo`);
        
        if (response.data.geonames) {
          const citiesData = response.data.geonames.map((city) => city.name);
          setCities(citiesData);
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
  
    if (selectedCountry) {
      fetchCities();
    }
  }, [selectedCountry]);
  

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
        className="mb-1 ml-2 text-textLight font-medium font-raleway text-sm"
      >
        Місто
      </label>
    <div ref={dropdownRef} className={`select ${isOpen ? "active" : ""} font-light border rounded-xl max-w-md p-3 border-black mb-4`}>
      <div className="select-styled font-light flex items-center justify-between max-w-md" onClick={toggleSelect}>
        {selectedCity ? selectedCity : 'Select City'}
        <img src={ArrowDown} alt="arrow down" className={`font-light w-4 ml-2 transform cursor-pointer ${isOpen ? "rotate-0" : "rotate-180"} transition-transform`} />
      </div>
      <ul className="select-options font-light z-50 mt-4 bg-white max-h-48 overflow-y-auto" style={{ display: isOpen ? "block" : "none" }}>
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => handleCityChange(city)}
            className={`border p-2 rounded-xl mt-2 border-black cursor-pointer ${selectedCity === city ? "is-selected" : ""}`}
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
