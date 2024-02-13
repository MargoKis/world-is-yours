import React from "react";
import order from "../../assets/temporary-img/tent.png";
import trash from "../../assets/icons/icon-trash.svg";
import ArrowDown from "../../assets/icons/arrow-up.svg";

const CartItem = ({ product, handleQuantityChange, handleRemoveItem }) => {
  const calculateProductTotal = () => {
    const discountedPrice = product.price * (1 - product.discount / 100);
    return discountedPrice * product.quantity;
  };

  return (
    <>
      <div className="flex flex-row justify-between items-end border-b border-gray p-4">
        <div className="flex flex-row items-center">
          <img src={order} alt={product.name} className="w-36 h-36 rounded-lg mr-4" />
          <div className="flex flex-col gap-2">
            <p className="font-medium text-xl">{product.name}</p>
            <div className="text-gray gap-2">
              <p className="mt-3 text-grey font-normal text-base">
                Розмір: {product.size}
              </p>
              <p className="mt-3 text-grey font-normal text-base">
                Колір: {product.color}
              </p>
              <p className="mt-3 flex flex-row text-gray font-normal text-base">
                Кількість:{" "}
                <img
                  className="w-3 mr-2 rotate-180 ml-4 mr-4 cursor-pointer"
                  src={ArrowDown}
                  alt="arrow down"
                  onClick={() => handleQuantityChange(product.id, "decrement")}
                />{" "}
                {product.quantity}{" "}
                <img
                  className="w-3 mr-2 rotate-0 ml-4 cursor-pointer"
                  src={ArrowDown}
                  alt="arrow up"
                  onClick={() => handleQuantityChange(product.id, "increment")}
                />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className=""></p>
          <div className="">
            <p className="text-gray mt-3 font-normal text-base">Ціна: {product.price} грн</p>
            <p className="text-gray mt-3 font-normal text-base">Знижка: {product.discount}%</p>
            <p className="text-gray mt-3 font-semibold text-grayDark">
              Всього: {calculateProductTotal()} грн
            </p>
          </div>
        </div>
        <div>
          <img
            src={trash}
            alt="delete icon"
            className="cursor-pointer w-6 h-6 mb-9"
            onClick={() => handleRemoveItem(product.id)}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;



