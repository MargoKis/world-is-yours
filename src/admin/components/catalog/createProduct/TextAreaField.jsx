import React from 'react'

const TextAreaField = ({ id, label, placeholder, rows }) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm mb-2">
          {label}
        </label>
        <textarea
          id={id}
          placeholder={placeholder}
          className="p-2 rounded-xl border border-gray-300 mb-4 h-24 resize-none"
          rows={rows}
        ></textarea>
      </div>
    );
  };

export default TextAreaField
