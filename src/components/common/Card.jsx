import React from "react";
import HeartIcon from "../../assets/icons/icon-heart.svg";
import Button from "./Button";
import Cart from "../../assets/icons/dark/icon-cart-dark.svg";
import Image from "../../assets/temporary-img/tent.png";

const Card = ({ data }) => {
  // console.log(data.image);


  const toggleWishList = ()=>{

  };
  return (
    <>
      <div className=" m-3 border-2 border-gray-light rounded-lg relative w-90 items-center">
        <div className="flex justify-center px-1">
          <img
            src={data.image_1}
            alt="product img"
            className="w-80 h-96 object-cover max-w-200 rounded-lg"
          />
        </div>

        <div className="absolute top-3 right-3 m-2" onClick={()=>toggleWishList()}>
          <img src={HeartIcon} alt="heart icon" width="26" className="cursor-pointer" />
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="p-5 flex-col">
            <p className="text-custom-black font-semibold">{data.name}</p>
            <p className="text-custom-black ">{data.price}</p>
          </div>
          <Button classNameBtn="flex border rounded-md py-3 px-3 mr-4">
            <img src={Cart} alt="cart" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
