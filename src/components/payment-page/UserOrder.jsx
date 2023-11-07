import React from "react";
import order from "../../assets/temporary-img/tent.png";

// база товарів, які замовляє користувач
const products = [
  {
    id: 1,
    name: "Палатка",
    price: 100,
    image: { order },
    size: "M",
    color: "Red",
    quantity: 5,
  },
  {
    id: 2,
    name: "Футболка",
    price: 200,
    image: { order },
    size: "M",
    color: "White",
    quantity: 3,
  },
  {
    id: 3,
    name: "Термос",
    price: 225,
    image: { order },
    size: "none",
    color: "Grey",
    quantity: 2,
  },
  {
    id: 4,
    name: "Кавоварка",
    price: 415,
    image: { order },
    size: "none",
    color: "Yellow",
    quantity: 1,
  },
];

const UserOrder = () => {
  return (
    <div className="border text-blue rounded-2xl w-2/6 p-8">
      <div className="">
        <div className="flex flex-row justify-between text-custom-black">
          <h1 className="font-raleway text-20px">Ваше замовлення</h1>
          <p className="font-raleway text-20px text-blue">900 грн</p>
        </div>
        <hr className="mt-6 mb-6" />
        <div className="overflow-auto max-h-72 pr-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-row justify-between text-custom-black mb-6"
            >
              <img
                src={product.image.order}
                alt="user order"
                className="w-28"
              />
              <div className="flex flex-col justify-between">
                <p>{product.name}</p>
                <div className="">
                  <p>Розмір: {product.size}</p>
                  <p>Колір: {product.color}</p>
                  <p>Кількість: {product.quantity}</p>
                </div>
              </div>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <hr className="mt-6 mb-6" />
        <div className="flex flex-row justify-between  text-custom-black">
          <div className="flex flex-col gap-2">
            <p>Підсумок:</p>
            <p>Знижка:</p>
            <p>Доставка:</p>
          </div>
          <div className="flex flex-col text-custom-black text-right gap-2">
            <p>940 грн</p>
            <p>40 грн</p>
            <p>0 грн</p>
          </div>
        </div>
        <hr className="mt-6 mb-6" />
        <div className="flex flex-row justify-between">
          <p>Всього:</p>
          <p>900 грн</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;

// import React from "react";
// import order from "../../assets/temporary-img/tent.png";

// // база товарів, які замовляє користувач
// const products = [
//   {
//     id: 1,
//     name: "Палатка",
//     price: 100,
//     image: { order },
//     size: "M",
//     color: "Red",
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name: "Футболка",
//     price: 200,
//     image: { order },
//     size: "M",
//     color: "White",
//     quantity: 3,
//   },
//   {
//     id: 3,
//     name: "Термос",
//     price: 225,
//     image: { order },
//     size: "none",
//     color: "Grey",
//     quantity: 2,
//   },
//   {
//     id: 4,
//     name: "Кавоварка",
//     price: 415,
//     image: { order },
//     size: "none",
//     color: "Yellow",
//     quantity: 1,
//   },

// ];

// const UserOrder = () => {
//   return (
//     <div className="border text-blue rounded-2xl max-w-md p-10">
//       <div className="">
//         <div className="flex flex-row justify-between text-custom-black">
//           <h1>Ваше замовлення</h1>
//           <p>900 грн</p>
//         </div>
//         <hr className="mt-6 mb-6" />
//         <div className="overflow-auto max-h-72">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex flex-row justify-between text-custom-black mb-6"
//             >
//               <img
//                 src={product.image.order}
//                 alt="user order"
//                 className="w-24 h-24 object-cover"
//               />
//               <div className="flex flex-col">
//                 <p>{product.name}</p>
//                 <p>Розмір: {product.size}</p>
//                 <p>Колір: {product.color}</p>
//                 <p>Кількість: {product.quantity}</p>
//               </div>
//               <p>{product.price} грн</p>
//             </div>
//           ))}
//         </div>
//         <hr className="mt-6 mb-6" />
//         <div className="flex flex-row justify-between text-custom-black">
//           <div className="flex flex-col">
//             <p>Підсумок:</p>
//             <p>Знижка:</p>
//             <p>Доставка:</p>
//             <p>Всього:</p>
//           </div>
//           <div className="flex flex-col text-custom-black">
//             <p>940 грн</p>
//             <p>40 грн</p>
//             <p>0 грн</p>
//             <p>900 грн</p>
//           </div>
//         </div>
//         <hr className="mt-6 mb-6" />
//         <div className="flex flex-row justify-between">
//           <p>Всього:</p>
//           <p>900 грн</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserOrder;
