import React, { useState, useEffect } from 'react';
import CartItem from '../components/cart/CartItem';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

import { motion as m } from 'framer-motion';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Палатка',
      price: 100,
      size: 'M',
      color: 'Red',
      quantity: 5,
      discount: 10,
    },
    {
      id: 2,
      name: 'Футболка',
      price: 200,
      size: 'M',
      color: 'White',
      quantity: 3,
      discount: 5,
    },
    {
      id: 3,
      name: 'Термос',
      price: 225,
      size: 'none',
      color: 'Grey',
      quantity: 2,
      discount: 'Немає',
    },
    {
      id: 4,
      name: 'Кавоварка',
      price: 415,
      size: 'none',
      color: 'Yellow',
      quantity: 1,
      discount: 15,
    },
    // Добавьте больше товаров при необходимости
  ]);

  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      if (typeof item.discount === 'number') {
        const discountedPrice = item.price * (1 - item.discount / 100);
        total += discountedPrice * item.quantity;
      } else {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  const [totalAmount, setTotalAmount] = useState(calculateTotalAmount(cart));

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(cart));
  }, [cart]);

  const handleQuantityChange = (id, operation) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === id) {
          let newQuantity = product.quantity;
          if (operation === 'increment' && newQuantity < 100) {
            newQuantity++;
          } else if (operation === 'decrement' && newQuantity > 1) {
            newQuantity--;
          }
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      return updatedCart;
    });
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      return updatedCart;
    });
  };

  const handleRemoveAllItems = () => {
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <div className='w-full flex justify-center items-center flex-col mt-20 mb-60'>
        <p className='font-raleway font-semibold text-4xl mb-20'>Кошик</p>
        <p className='font-raleway text-18px font-semibold text-center text-gray mt-10'>
          Кошик порожній. <br /> Додайте товари, які вас цікавлять!
        </p>
        <Link to='/'>
          <Button classNameBtn='w-22 bg-gray-dark mt-6 p-4 border rounded-xl font-bold text-18px text-white' nameBtn='submitForm' valueBtn='submit' type='submit'>
            На головну сторінку
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className='w-8/12 mx-auto mt-16 mb-10'>
        <div className='flex justify-between items-center mb-4'>
          <p className='font-raleway font-semibold text-4xl mx-auto'>Кошик</p>
          <p className='font-raleway font-normal text-lg cursor-pointer hover:underline focus:underline' onClick={handleRemoveAllItems} tabIndex='0'>
            Видалити все
          </p>
        </div>

        <div className='cart-container max-h-52 overflow-y-auto'>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} handleQuantityChange={handleQuantityChange} handleRemoveItem={handleRemoveItem} />
          ))}
        </div>
      </div>
      <div className='w-10/12 mx-auto'>
        <hr className='text-gray' />

        <div className='flex flex-row text-center items-center my-10'>
          <Button classNameBtn='w-9/12 bg-transparent border-blue border-dashed text-blue duration-300 p-4 border rounded-xl font-normal text-18px hover:text-white hover:bg-blue focus:text-white focus:bg-blue' nameBtn='submitForm' valueBtn='submit' type='submit'>
            Промокод для знижки
          </Button>
          <p className='w-full items-center font-semibold text-xl'>Всього: {totalAmount} грн</p>
          <Button classNameBtn='w-9/12 bg-gray-dark p-4 border rounded-xl font-bold text-18px text-white duration-300 hover:bg-transparent hover:text-black focus:bg-transparent focus:text-black' nameBtn='submitForm' valueBtn='submit' type='submit'>
            Оплатити
          </Button>
        </div>

        <hr className='mb-10 text-gray' />
      </div>
    </m.div>
  );
};

export default Cart;
