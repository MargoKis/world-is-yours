// import React from "react";
// import Summer from "../../assets/icons/icon-sun.svg";
// import Winter from "../../assets/icons/icon-snow.svg";

// const SeasonSelect = () => {
//   return (
//     <div className="flex flex-row flex-wrap mt-20 gap-14 ml-10 max-w-8xl">
//       <div>
//         <button className="text-custom-black border border-black rounded-2xl py-10 px-64 flex flex-row font-raleway font-600 text-40px gap-6"><img src={Summer} alt='summer equipment' className=""/>Літо</button>
//       </div>
//       <div>
//         <button className="text-custom-black border border-black rounded-2xl py-10 px-64 flex flex-row font-raleway font-600 text-40px gap-6"><img src={Winter} alt='winter equipment' className=""/>Зима</button>
//       </div>
//     </div>
//   );
// };

// export default SeasonSelect;


import React from "react";
import Summer from "../../assets/icons/icon-sun.svg";
import Winter from "../../assets/icons/icon-snow.svg";
import Button from "../common/Button";

const SeasonSelect = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap mt-20 sm:gap-20 ml-10">
      <div>
        <Button classNameBtn="text-custom-black border border-black rounded-2xl py-4 sm:py-10 px-24 sm:px-64 flex flex-row font-raleway font-600 text-20px sm:text-40px sm:gap-6">
          <img src={Summer} alt='summer equipment' className="w-6 sm:w-14"/>
          Літо
        </Button>
      </div>
      <div>
        <Button classNameBtn="text-custom-black border border-black rounded-2xl py-4 sm:py-10 px-24 sm:px-64 flex flex-row font-raleway font-600 text-20px sm:text-40px sm:gap-4">
          <img src={Winter} alt='winter equipment' className="w-6 sm:w-14"/>
          Зима
        </Button>
      </div>
    </div>
  );
};

export default SeasonSelect;

