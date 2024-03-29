import React, { useRef } from "react";
import CloseIcon from "../../assets/icons/icon-close.svg";
import CategoryFilters from "./CategoryFilters";
import Button from "../common/Button";
import styles from "../main-page/main.module.css";

const FilterPopup = ({ onClose }) => {
  const popupRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div ref={popupRef} className="flex flex-col justify-between bg-white rounded-l-lg w-1/3 h-full">
        <div className="flex flex-col">
          <div className="flex items-center mx-6 my-6">
            <img
              src={CloseIcon}
              alt="close icon"
              className="cursor-pointer"
              onClick={onClose}
            />
            <h2 className="text-lg font-semibold ml-36">Фільтрувати</h2>
          </div>
          <hr className="mx-0 my-0" />
          <CategoryFilters />
        </div>
        <Button classNameBtn={styles.btn} style={{ marginLeft: '6%', marginRight: '6%' }} type="submit">
          Переглянути результати
        </Button>
      </div>
    </div>
  );
};

export default FilterPopup;
