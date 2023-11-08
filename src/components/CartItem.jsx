import React from 'react';
import checkIcon from '../assets/icons/dark/icon-check.svg'
import heartIcon from '../assets/icons/dark/icon-heart.svg'
import trashIcon from '../assets/icons/dark/icon-trash.svg'
import productImage1 from '../assets/images/tent.png'

const cartItems = [
    {
        productName: 'Tent',
        productImage: productImage1,
        size: 'M',
        color: 'Black',
        price: '500',
        discount: false,
        id: 'ci1'
    },
]
function CartItem() {
    return(
        cartItems.map((i) => (
            <div key={i.id} className='flex'>
                <img className='h-44 w-44' src={i.productImage} alt={i.productName}/>

                <div className="flex justify-between items-center">
                    <div>
                        <h1>{i.productName}</h1>
                        <p>Розмір: {i.size}</p>
                        <p>Колір: {i.color}</p>
                        <p className='flex'>Кількість:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                            1<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </p>
                    </div>
                    <div>
                        <p>Ціна: {i.price}</p>
                        <p>Знижка: {i.discount === false ? 'Немає' : '100грн'}</p>
                        <p>Всього: 1</p>
                    </div>
                    <div>
                        <img src={trashIcon} alt="trashIcon"/>
                    </div>

                </div>

            </div>
        ))
    )
}

export default CartItem;
