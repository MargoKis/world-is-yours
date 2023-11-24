import React from "react";
import order from "../../assets/temporary-img/tent.png";
import ArrowDown from "../../assets/icons/arrow-up.svg";

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
  return (
    <div className="border text-blue rounded-2xl w-2/6 p-8 h-screen">
      <div className="mt-2">
        <div className="flex flex-row justify-between text-custom-black">
          <h1 className="font-raleway text-20px">Ваше замовлення</h1>
          <p className="font-raleway text-20px text-blue">900 грн</p>
        </div>
        <hr className="mt-6 mb-6" />
        <div className="scrolnan overflow-auto max-h-80 pr-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-row justify-between text-custom-black mb-6"
            >
              <img
                src={product.image.order}
                alt="user order"
                className="w-32"
              />
              <div className="flex flex-col justify-between">
                <p>{product.name}</p>
                <div className="font-raleway text-gray">
                  <p className="text-grey">Розмір: {product.size}</p>
                  <p className="text-grey">Колір: {product.color}</p>
                  <p className="flex flex-row text-gray">
                    Кількість:{" "}
                    <img
                      className="w-3 mr-2 rotate-180 ml-3"
                      src={ArrowDown}
                      alt="arrow down"
                    />{" "}
                    {product.quantity}{" "}
                    <img
                      className="w-3 mr-2 rotate-0 ml-3"
                      src={ArrowDown}
                      alt="arrow down"
                    />{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray">{product.price}</p>
            </div>
          ))}
        </div>
        <hr className="mt-6 mb-6" />
        <div className="flex flex-row justify-between  text-custom-black">
          <div className="flex flex-col gap-2">
            <p className="text-gray">Підсумок:</p>
            <p className="text-gray">Знижка:</p>
            <p className="text-gray">Доставка:</p>
          </div>
          <div className="flex flex-col text-right gap-2">
            <p className="text-gray">940 грн</p>
            <p className="text-gray">40 грн</p>
            <p className="text-gray">0 грн</p>
          </div>
        </div>
        <hr className="mt-6 mb-6" />
        <div className="flex flex-row justify-between">
          <p className="font-bold font-raleway">Всього:</p>
          <p className="font-bold font-raleway font-600">900 грн</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
