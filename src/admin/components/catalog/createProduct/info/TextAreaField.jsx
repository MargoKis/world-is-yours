import React, { useState } from 'react';

const TextAreaField = ({ id, label, placeholder, rows, maxLength }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const charCount = maxLength ? maxLength - value.length : value.length;

  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="text-sm mb-2">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="p-2 rounded-xl border border-gray-300 mb-4 h-24 resize-none"
        rows={rows}
        onChange={handleChange}
        value={value}
        maxLength={maxLength}
      ></textarea>
      {maxLength && (
        <span className={`text-sm absolute top-0 right-0 ${value.length > maxLength ? 'text-red-500' : 'text-gray-500'}`}>
          {charCount}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;

