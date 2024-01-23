import React, { useState } from "react";
import CartItem from "../components/cart/CartItem";
import Button from "../components/common/Button";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Палатка",
      price: "100 грн",
      size: "M",
      color: "Red",
      quantity: 5,
    },
    {
      id: 2,
      name: "Футболка",
      price: "200 грн",
      size: "M",
      color: "White",
      quantity: 3,
    },
    {
      id: 3,
      name: "Термос",
      price: "225 грн",
      size: "none",
      color: "Grey",
      quantity: 2,
    },
    {
      id: 4,
      name: "Кавоварка",
      price: "415 грн",
      size: "none",
      color: "Yellow",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, operation) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === id) {
          let newQuantity = product.quantity;

          if (operation === "increment" && newQuantity < 100) {
            newQuantity++;
          } else if (operation === "decrement" && newQuantity > 1) {
            newQuantity--;
          }

          return { ...product, quantity: newQuantity };
        }

        return product;
      });
    });
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((product) => product.id !== id);
    });
  };

  return (
    <>
      <div className="w-8/12 mx-auto mt-8 mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="font-raleway font-semibold text-4xl mx-auto">Кошик</p>
          <p className="font-raleway font-normal text-lg cursor-pointer">
            Видалити все
          </p>
        </div>

        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="w-10/12 mx-auto">
        <hr className="text-gray" />
        <div className="flex flex-row text-center align-center mb-10">
          <Button
            classNameBtn="w-9/12 bg-transparent border-blue border-dashed text-blue mt-10 p-4 border rounded-xl font-normal text-18px "
            nameBtn="submitForm"
            valueBtn="submit"
            type="submit"
          >
            Промокод для знижки
          </Button>
          <p className="w-full mt-10 text-center align-center">Всього</p>
          <Button
            classNameBtn="w-9/12 bg-gray-dark mt-10 p-4 border rounded-xl font-bold text-18px text-white"
            nameBtn="submitForm"
            valueBtn="submit"
            type="submit"
          >
            Оплатити
          </Button>
        </div>
        <hr className="mb-10 text-gray" />
      </div>
    </>
  );
};

export default Cart;
