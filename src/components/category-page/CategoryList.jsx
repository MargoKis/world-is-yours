import React, { useEffect, useState } from "react";
import FilterPopup from "./FilterPopup";
import Filter from "../../assets/icons/icon-filters.svg";
import { $api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory, setSubcategory } from "../../redux/categoryParamsSlice";

const CategoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const responce = await $api.get("/api/products/category/");
      setCategories(responce.data);
      setSelectedFilter(responce.data[0].id);
      console.log(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubCategories = async () => {
    const responce = await $api.get("/api/products/subcategory/");
    const filteredProducts = responce.data.filter(
      (item) => item.category === selectedFilter
    );
    setSubCategories(filteredProducts);
    console.log(responce.data);
  };
  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);
  useEffect(() => {
    fetchSubCategories();
  }, [categories, selectedFilter]);

  // set category
  const handleCategoryClick = (id) => {
    dispatch(setCategory(id));
    dispatch(setSubcategory(null));
    setSelectedFilter(id);
  };

  // set sub category
  const handleSubCategoryClick = (id) => {
    dispatch(setSubcategory(id));
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const changeCategory = (category) => {
    navigate(`?category=${category}`);
  };
  return (
    <div className="flex flex-col m-10">
      <h1 className="text-blue text-xl mb-4 font-semibold">Категорії</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-6 font-medium ">
          {/* categories */}
          <p className="cursor-pointer" onClick={() => handleCategoryClick(null)}>
            Все
          </p>
          {categories.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer"
              onClick={() => handleCategoryClick(item.id)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <img
          src={Filter}
          alt="filter icon"
          className="cursor-pointer"
          onClick={togglePopup}
        />
      </div>
      <hr className="text-blue my-2" />
      <div className="flex flex-row gap-6 text-sm text-gray font-medium">
        {/* sub categories */}
        {subCategories.map((item) => (
          <p
            key={item.id}
            className="cursor-pointer"
            onClick={() => handleSubCategoryClick(item.id)}
          >
            {item.name}
          </p>
        ))}
      </div>
      {isPopupOpen && <FilterPopup onClose={togglePopup} />}
    </div>
  );
};

export default CategoryList;
