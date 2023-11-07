import React from "react";
import TentImg from "../../assets/temporary-img/tent.png";
import HeartIcon from "../../assets/icons/icon-heart.svg";

const Card = ({ data }) => {
  return (
    <div className="max-w-200 m-4 border-2 border-gray-light rounded-lg  relative">
      <img
        src={TentImg}
        alt=""
        className="w-80 max-w-200 rounded-lg max-w-8xl"
      />
      <div className="absolute top-3 right-3 m-2">
        <img src={HeartIcon} alt="heart icon" width="26" />
      </div>
      <div className="p-5 ">
        <p className='text-custom-black'>{data.name}</p>
        <p className='text-custom-black'>{data.price}</p>
        <p className='text-custom-black'>{data.colors.join(", ")}</p>
      </div>
    </div>
  );
};

export default Card;