import React from 'react';
import {Link} from "react-router-dom";

function DonateBanner() {
    return (
        <div className='bg-custom-black py-2 mx-auto px-10'>
            <p className='text-center'><Link to={'/'}>Приєднатися до збору коштів</Link></p>
        </div>
    );
}

export default DonateBanner;
