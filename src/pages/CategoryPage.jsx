import React, { useState } from 'react';
import CategoryList from '../components/category-page/CategoryList';
import FilterPopup from '../components/category-page/FilterPopup';

const CategoryPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <CategoryList />
      {isPopupOpen && <FilterPopup onClose={handleTogglePopup} />} 
    </div>
  );
};

export default CategoryPage;