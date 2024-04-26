import React from 'react';
// import { api } from "../../api/api";

import { motion as m } from 'framer-motion';

const History = () => {
  // const getOrder = async () => {
  //   try {
  //     const response = await api.get("/api/orders/");
  //     console.log("order===");
  //     console.log(response.data); // Припускаючи, що дані замовлення знаходяться у властивості `data` об'єкта відповіді
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getOrder();
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className=" mb-12 text-blue text-[25px] font-semibold font-['Raleway']">Історія замовлень</div>
      <div className='Order1 w-[1127px] h-[140px] p-5 rounded-[15px] border border-blue justify-between items-start inline-flex'>
        <div className='InfoContainer w-[454px] self-stretch justify-start items-start gap-5 flex'>
          {/* <div className="Line w-[100px] self-stretch origin-top-left rotate-90 border-2 border-blue"></div> */}
          <div className='Info flex-col justify-start items-start gap-2.5 inline-flex'>
            <div className="00000000520232008 text-zinc-500 text-lg font-medium font-['Raleway']">Замовлення № 0000000, 05 вересня 2023 20:08</div>
            <div className=" text-black  text-xl font-medium font-['Raleway']">Доставлено</div>
          </div>
        </div>
        <div className='PriceContainer w-[100px] flex-col justify-start items-start gap-2.5 inline-flex'>
          <div className=" text-black  text-lg font-medium font-['Raleway']">Всього</div>
          <div className=" text-black  text-xl font-semibold font-['Raleway']">560 грн.</div>
        </div>
        <div className='ImageCintainer h-[100px] justify-start items-start gap-2.5 flex'>
          <img className='TrekkingShoes w-[100px] h-[100px] h-[100px bg-stone-300 rounded-lg justify-center items-center flex]' src='https://via.placeholder.com/113x170' alt='img' />
        </div>
      </div>
    </m.div>
  );
};

export default History;
