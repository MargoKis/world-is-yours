import React from "react";
import ColorSelection from "../../components/catalog/createProduct/size-color/ColorSelection";
import SizePhoto from "../../components/catalog/createProduct/size-color/SizePhoto";

const SizeColorPage = () => {
  return (
    <div className="flex flex-row gap-36">
      <ColorSelection />
      <SizePhoto />
    </div>
  );
};

export default SizeColorPage;
