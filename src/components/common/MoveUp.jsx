import React from 'react';
import ArrowUp from '../../assets/icons/arrow-up.svg';

const MoveUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex flex-col items-center gap-4 mb-12 mt-16' onClick={handleScrollToTop} style={{ cursor: 'pointer' }}>
      <img className='text-custom-black w-6' src={ArrowUp} alt='arrow up'/>
      <p className='text-custom-black font-raleway font-600 text-20px'>Вгору</p>
    </div>
  );
};

export default MoveUp;