// import React from "react";
// import PhotoGallery from "../components/product/PhotoGallery";
// import FilterList from "../components/product/FilterList";

// const ProductPage = () => {
//   return (
//     <div className="flex flex-row gap-20">
//       <PhotoGallery />
//       <FilterList />
//     </div>
//   );
// };

// export default ProductPage;




import React from "react";
import PhotoGallery from "../components/product/PhotoGallery";
import FilterList from "../components/product/FilterList";

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-28 mb-28">
      <div className="flex flex-row gap-20 mt-28 mb-28">
        <PhotoGallery />
        <FilterList />
      </div>
    </div>
  );
};

export default ProductPage;
