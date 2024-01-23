import React from "react";
import order from "../../assets/temporary-img/tent.png";
import ArrowDown from "../../assets/icons/arrow-up.svg";
import { useState } from "react";

// база товарів, які замовляє користувач
const products = [
  {
    id: 1,
    name: "Палатка",
    price: '100 грн',
    image: { order },
    size: "M",
    color: "Red",
    quantity: 5,
  },
  {
    id: 2,
    name: "Футболка",
    price: '200 грн',
    image: { order },
    size: "M",
    color: "White",
    quantity: 3,
  },
  {
    id: 3,
    name: "Термос",
    price: '225 грн',
    image: { order },
    size: "none",
    color: "Grey",
    quantity: 2,
  },
  {
    id: 4,
    name: "Кавоварка",
    price: '415 грн',
    image: { order },
    size: "none",
    color: "Yellow",
    quantity: 1,
  },
];

const UserOrder = () => {
  const [cart, setCart] = useState(products);

  const handleQuantityChange = (id, operation) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        let quantity = product.quantity;
        if (operation === "increment" && quantity < 100) {
          quantity++;
        } else if (operation === "decrement" && quantity > 1) {
          quantity--;
        }
        return { ...product, quantity };
      }
      return product;
    });

    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    const subtotal = cart.reduce((total, product) => {
      return total + parseInt(product.price) * product.quantity;
    }, 0);

    const discount = subtotal * 0.05; // 5% знижка
    const delivery = 0; // Доставка

    const totalPrice = subtotal - discount + delivery;
    return totalPrice;
  };

  return (
    <div className="border text-blue rounded-xl p-7 h-screen">
      <div className="mt-2">
        <div className="flex flex-row justify-between text-custom-black">
          <h1 className="font-raleway font-semibold text-20px">Ваше замовлення</h1>
          <p className="font-raleway font-semibold text-20px text-blue">{calculateTotalPrice()} грн</p>
        </div>
        <hr className="mt-6 mb-6 text-blue" />
        <div className="scrolnan overflow-auto max-h-80 pr-4">
          {cart.map((product) => (
            <>
            <div
              key={product.id}
              className="flex flex-row justify-between text-custom-black"
            >
              <div className="flex flex-row mr-20">
              <img
                src={product.image.order}
                alt="user order"
                className="w-32 h-32 rounded-lg"
              />
              <div className="flex flex-col ml-4 justify-center gap-8">
                <p className="font-medium text-lg">{product.name}</p>
                <div className="text-gray gap-2">
                  <p className="text-grey font-light text-base">Розмір: {product.size}</p>
                  <p className="text-grey font-light text-base">Колір: {product.color}</p>
                  <p className="flex flex-row text-gray font-light text-base">
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
              <p className="text-gray text-lg">{product.price} </p>
            </div>
            <hr className="text-gray mt-3 mb-3"/>
            </>
          ))}
        </div>
        <hr className="mt-3 mb-6 text-blue" />
        <div className="flex flex-row justify-between  text-custom-black">
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-gray">Підсумок:</p>
            <p className="text-gray">Знижка:</p>
            <p className="text-gray">Доставка:</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-gray mb-3">{calculateTotalPrice()} грн</p>
            <p className="text-gray mb-3">40 грн</p>
            <p className="text-gray mb-3">0 грн</p>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-xl text-custom-black font-raleway">Всього:</p>
          <p className="font-semibold text-xl text-custom-black">900 грн</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
