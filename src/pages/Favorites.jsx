import React, { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import { $api } from '../api/api';
import { useSelector } from 'react-redux';
import Container from '../components/common/container';
import NotFound404 from './NotFound404';

import { motion as m } from 'framer-motion';

const Favorites = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setCount(wishlist.length);

    const fetchProducts = async () => {
      const newProducts = [];

      for (const id of wishlist) {
        try {
          const response = await $api.get(`/api/products/${id}/`);

          const productExists = newProducts.some((product) => product.id === response.data.id);

          if (!productExists) {
            newProducts.push(response.data);
          }
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      }

      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter((product) => wishlist.includes(product.id));

        return [...updatedProducts, ...newProducts.filter((newProduct) => !updatedProducts.some((product) => product.id === newProduct.id))];
      });
    };

    fetchProducts();
  }, [wishlist]);

  if (!user.email) {
    console.log('user in store==' + JSON.stringify(user, null, 2));
    return <NotFound404 />;
  }
  return (
    <m.Container className='justify-center text-grayLight my-[70px]' id='sectionFav' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className='flex justify-center gap-2.5 mb-[50px]'>
        <h1 className="text-5xl font-semibold text-neutral-800 font-['Raleway']">Обрані</h1>
        <div className='flex justify-center items-center w-6 h-6 bg-blue rounded-full'>
          <span className="text-sm font-normal text-white font-['Raleway']">{count}</span>
        </div>
      </div>

      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center'>
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </m.Container>
  );
};

export default Favorites;
