import React, { useState } from "react";

const InputField = ({ id, label, placeholder, selectOptions, maxLength }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const charCount = maxLength ? maxLength - value.length : value.length;

  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="text-sm mb-2">
        {label}
      </label>
      {selectOptions ? (
        <select
          id={id}
          placeholder={placeholder}
          className="p-2 pr-10 rounded-xl border border-gray-300 mb-4"
        >
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="p-2 rounded-xl border border-gray-300 mb-4"
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
        />
      )}
      {maxLength && (
        <span
          className={`text-sm absolute top-0 right-0 ${
            value.length > maxLength ? "text-red-500" : "text-gray-500"
          }`}
        >
          {charCount}
        </span>
      )}
    </div>
  );
};

export default InputField;
