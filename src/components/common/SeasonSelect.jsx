import React from "react";
import Summer from "../../assets/icons/icon-sun.svg";
import Winter from "../../assets/icons/icon-snow.svg";

const SeasonSelect = () => {
  return (
    <div className="flex flex-row flex-wrap mt-20 gap-14 ml-10">
      <div>
        <button className="text-custom-black border border-black rounded-2xl py-10 px-64 flex flex-row font-raleway font-600 text-40px gap-6"><img src={Summer} alt='summer equipment' className=""/>Літо</button>
      </div>
      <div>
        <button className="text-custom-black border border-black rounded-2xl py-10 px-64 flex flex-row font-raleway font-600 text-40px gap-6"><img src={Winter} alt='winter equipment' className=""/>Зима</button>
      </div>
    </div>
  );
};

export default SeasonSelect;
