import React, { useEffect, useState } from "react";
import HeartIcon from "../../assets/icons/icon-heart.svg";
import HeartIconRed from "../../assets/icons/icon-heart-red.svg";
import Button from "./Button";
import Cart from "../../assets/icons/dark/icon-cart-dark.svg";
import CartFull from "../../assets/icons/dark/icon-cart-dark-full.svg";
import { $api } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/wishlistSlice";
import { addItemCart, removeItemCart } from "../../redux/cartSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const [isLiked, setLike] = useState(false);
  const [isCart, setCart] = useState("");

  // console.log(data);

  const wishlist = useSelector((state) => state.wishlist.items);

  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (wishlist.includes(data.id)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [data, wishlist]);

  useEffect(() => {
    setCart(cart.find((item) => item.product === data.id));
  }, [data, cart]);

  const toggleWishList = async () => {
    try {
      if (!isLiked) {
        await $api.post(`/api/wishlist/`, { product: data.id });
        dispatch(addItem(data.id));
      } else {
        await $api.delete(`/api/wishlist/${data.id}/`);
        dispatch(removeItem(data.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleCart = async () => {
    try {
      if (!isCart) {
        const response = await $api.post(`/api/baskets/`, { product: data.id });
        dispatch(addItemCart(response.data));

        console.log(response.data);
      } else {
        const response = await $api.delete(`/api/baskets/${isCart.id}/`);
        dispatch(removeItemCart(data.id));

        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" m-3 border-2 border-gray-light rounded-lg relative w-90 items-center">
        <div className="flex justify-center px-1">
          <img
            src={data.image_1}
            alt="product img"
            className="w-80 h-96 object-cover max-w-200 rounded-lg"
          />
        </div>

        <div className="absolute top-3 right-3 m-2" onClick={() => toggleWishList()}>
          <img
            src={isLiked ? HeartIconRed : HeartIcon}
            alt="heart icon"
            width="26"
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="p-5 flex-col">
            <p className="text-custom-black font-semibold">{data.name}</p>
            <p className="text-custom-black ">{data.price}</p>
          </div>
          <Button
            classNameBtn={`flex border rounded-md py-3 px-3 mr-4 ${
              isCart ? " bg-black" : ""
            }`}
            onClickBtn={() => toggleCart()}
          >
            <img src={isCart ? CartFull : Cart} alt="cart" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
