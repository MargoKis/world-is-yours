// import React, { useEffect, useState } from "react";
// import Card from "../common/Card";
// import cardData from "../../data";
// import axios from 'axios'

// const FavoritesCardList = () => {
//   const favoriteCards = cardData.slice(0, 8);

//   return (
//     <div className="text-grayLight">
//       <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">Наші фаворити</h1>
//       <div className="flex flex-wrap justify-around mb-20 mx-6">
//         {favoriteCards.map((item, index) => (
//           <Card data={item} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoritesCardList;






import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import axios from 'axios';

const FavoritesCardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const API = 'http://localhost:8000/api/products/'
    console.log(API)
    axios.get(API)
      .then((response) => {
        const favourites = response.data; 
        setProducts(favourites); 
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []); 

  return (
    <div className="text-grayLight">
      <h1 className="flex items-center justify-center mt-20 mb-10 font-raleway text-custom-black text-30px">Наші фаворити</h1>
      <div className="flex flex-wrap justify-around mb-20 mx-6">
        {products.map((item, index) => (
          <Card
            key={index} 
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCardList;
