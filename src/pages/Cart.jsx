import React from 'react';
import CartItem from "../components/CartItem";


function Cart() {
    return (
        <div>
            <h1 className='text-center'>Корзина</h1>
            <CartItem/>
        </div>
    );
}

export default Cart;
