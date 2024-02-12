import React from 'react';
import {Link} from "react-router-dom";

function DonateBanner() {
    return (
        <div className='bg-custom-black py-2 mx-auto px-10'>
            <p className='text-center text-white'><Link to={'/'}>Знижка -10% на перше замовлення</Link></p>
        </div>
    );
}

export default DonateBanner;
