import React, { useEffect, useState } from "react";
import CategoryList from "../components/category-page/CategoryList";
import FilterPopup from "../components/category-page/FilterPopup";
import Card from "../components/common/Card";
import { $api } from "../api/api";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryPage = () => {
  const location = useLocation();
  const [categoryId, setCategoryId] = useState(null);
  const filters = useSelector((state) => state.categryFilter);
  let query = {};

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [arrivals, setArrivals] = useState([]);

  const [page, setPage] = useState(1);
  const [next, setNext] = useState("true");

  // fetch product
  const fetchData = async (page_size, page) => {
    try {
      if (filters.category) {
        query.category = "&category=" + filters.category;
      }

      if (filters.subcategory) {
        query.subcategory = "&subcategory=" + filters.subcategory;
      }
      if (query.subcategory) {
        delete query.category;
      }

      let queryString = Object.values(query).join("");
      console.log(queryString);
      const response = await $api.get(
        `/api/products/?page_size=${page_size}&page=${page}${queryString}`
      );
      setNext(response.data.next);
      // setArrivals((currentArrivals) => [...currentArrivals, ...response.data.results]);
      setArrivals(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(8, page);
  }, [page, filters]);

  return (
    <div>
      <CategoryList />
      {isPopupOpen && <FilterPopup onClose={handleTogglePopup} />}
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {arrivals.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
