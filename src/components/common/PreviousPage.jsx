import React from "react";
import ArrowLeft from "../../assets/icons/arrow-up.svg";
import { Link } from "react-router-dom";

const PreviousPage = (props) => {
  return (
    <Link>
      <div className="flex flex-row mt-10 ml-10 gap-4">
        <img
          src={ArrowLeft}
          alt="arrow left"
          className="transform rotate-[-95deg] w-6"
        />
        <p className='raleway-500 text-20px'>{props.text}</p>
      </div>
    </Link>
  );
};

export default PreviousPage;
