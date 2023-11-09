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
    <div className="flex flex-row sm:flex-row  mt-20 mx-10 justify-between ">
      <Button
        classNameBtn="text-custom-black border border-black rounded-2xl py-4 sm:py-10 px-12 w-49 
                        flex flex-row font-raleway font-600 text-20px sm:text-40px justify-center items-center"
      >
        <img src={Summer} alt="summer equipment" className="w-6 sm:w-14 mx-2" />
        <span className="mx-2">Літо</span>
      </Button>
      <Button
        classNameBtn="text-custom-black border border-black rounded-2xl py-4 sm:py-10 px-12 w-49
                        flex flex-row font-raleway font-600 text-20px sm:text-40px justify-center items-center"
      >
        <img src={Winter} alt="winter equipment" className="w-6 sm:w-14 mx-2" />
        <span className="mx-2">Зима</span>
      </Button>
    </div>
  );
};

export default SeasonSelect;
