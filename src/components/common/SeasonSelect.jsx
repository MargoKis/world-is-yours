import React from "react";
import Summer from "../../assets/images/summer-main.png";
import Winter from "../../assets/images/winter-main.png";

const SeasonSelect = () => {
  return (
    <div className="flex flex-row flex-wrap gap-14 m-6 max-w-100 justify-around">
      <div className="max-w-[660px]">
        <img src={Summer} alt="summer equipment" className="max-w-100" />
      </div>
      <div className="max-w-[660px]">
        <img src={Winter} alt="winter equipment" />
      </div>
    </div>
  );
};

export default SeasonSelect;
