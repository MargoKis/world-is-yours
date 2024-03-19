import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import CategoryDropdown from "../../components/catalog/CategoryDropdown";
import ProductsList from "../../components/catalog/ProductsList";
import CommonInfoPage from "./CommonInfoPage";

const CatalogPage = () => {
  const [showCommonInfo, setShowCommonInfo] = useState(false);

  const handleAddProductClick = () => {
    setShowCommonInfo(true);
  };

  return (
    <>
      {!showCommonInfo && (
        <div>
          <div className="flex flex-row justify-between m-8">
            <div className="flex flex-col">
              <h1 className="mb-2 text-blue text-4xl font-semibold">Каталог</h1>
              <div className="flex flex-row mt-3"></div>
            </div>
            <div className="flex flex-row items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="mr-8 text-xl cursor-pointer"
              />
              <img src="" alt="user avatar" />
            </div>
          </div>
          <hr className="text-gray m-8" />
          <div className="flex flex-row">
            <CategoryDropdown />
            <div className="flex flex-col mr-8 ml-8 w-full">
              <ProductsList onAddProductClick={handleAddProductClick} />
            </div>
          </div>
        </div>
      )}
      {showCommonInfo && <CommonInfoPage />}
    </>
  );
};

export default CatalogPage;
