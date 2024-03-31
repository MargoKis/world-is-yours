import React, { useState, useEffect } from 'react';

const SubCategoryBox = ({ title, subcategories, setSubcategories }) => {
  const [newSubcategory, setNewSubcategory] = useState('');
  const [addingSubcategory, setAddingSubcategory] = useState(false);

  const handleAddSubcategory = () => {
    setAddingSubcategory(true);
  };

  const handleInputChange = (e) => {
    setNewSubcategory(e.target.value);
  };

  const handleSaveSubcategory = () => {
    if (newSubcategory.trim() !== '') {
      const updatedSubcategories = [...subcategories, newSubcategory];
      setSubcategories(updatedSubcategories);
      setNewSubcategory('');
      setAddingSubcategory(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveSubcategory();
    }
  };

  useEffect(() => {
    if (!addingSubcategory) {
      handleSaveSubcategory();
    }
  }, [addingSubcategory]);

  return (
    <div className="category w-96 h-full bg-white p-4 mb-6 rounded-2xl ml-8 border border-black">
      <div className="category-title text-black font-medium mb-4 text-xl ml-4 underline">
        {title}
      </div>
      <ul className="sub-categories ml-4">
        {subcategories.map((subcategory, id) => (
          <li key={id}>
            <div className="category-item flex justify-between items-center cursor-pointer mb-3">
              <p className="font-normal text-base">{subcategory}</p>
            </div>
          </li>
        ))}
        {addingSubcategory && (
          <li>
            <div className="category-item flex justify-between items-center cursor-pointer mb-3">
              <p className="font-normal text-base">{newSubcategory}</p>
            </div>
          </li>
        )}
      </ul>
      {addingSubcategory ? (
        <div className="mt-3">
          <input
            type="text"
            className="border border-gray-300 p-1 rounded"
            placeholder="Нова підкатегорія"
            value={newSubcategory}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ml-2 px-2 py-1 bg-blue-500 text-black rounded hover:bg-blue-600"
            onClick={handleSaveSubcategory}
          >
            Зберегти
          </button>
        </div>
      ) : (
        <p className="ml-4 text-blue font-medium cursor-pointer" onClick={handleAddSubcategory}>
          <span className="text-3xl cursor-pointer">+ </span> Додати підкатегорію
        </p>
      )}
    </div>
  );
};

export default SubCategoryBox;

