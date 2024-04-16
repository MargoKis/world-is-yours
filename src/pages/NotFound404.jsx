import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

import { motion as m } from 'framer-motion';

const NotFound404 = () => {
  return (
    <m.div className='bg-page404 h-screen bg-cover flex justify-center items-center ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className='text-center'>
        <p className='text-8xl font-semibold text-raleway mb-2'>404</p>
        <p className='font-semibold text-20px'>Упс! Здається виникла помилка </p>
        <Link to='/'>
          <Button classNameBtn='w-96 bg-gray-dark mt-8 p-4 border border-slate-950 rounded-xl font-bold text-20px text-white '>На головну сторінку</Button>
        </Link>
      </div>
    </m.div>
  );
};

export default NotFound404;
