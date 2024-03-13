import React from 'react'

const InputField = ({ id, label, placeholder, selectOptions }) => {
    return (
      <div className="flex flex-col">
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
          />
        )}
      </div>
    );
  };

export default InputField
