import React from "react";
import PhotoGallery from "../components/product/PhotoGallery";
import FilterList from "../components/product/FilterList";
import PreviousPage from "../components/common/PreviousPage";
import MoveUp from '../components/common/MoveUp'

const ProductPage = () => {
  return (
    <>
      <PreviousPage text="Каталог" />
      <div className="flex justify-center items-center mt-28">
        <div className="flex flex-row gap-20">
          <PhotoGallery />
          <FilterList />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-raleway font-semibold text-2xl text-left text-grayDark mt-20 mb-10">
          Доповни комплект
        </h1>
        {/*  map of cards, + 4 товари на вибір до основного  */}
        <h1 className="font-raleway font-semibold text-2xl text-left text-grayDark mt-20 mb-10">
          Вже переглянуте
        </h1>
        {/*  map of cards, + 4 товари, які юзер вже переглянув  */}
      </div>
      <MoveUp/>
    </>
  );
};

export default ProductPage;