"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CurtButton = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart} = use(CartContext)
  const handleAdd2Cart = () => {
    setInCart(true);
    addToCart(food)
  };
  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className="flex-1 text-sm font-medium bg-green-600 text-white rounded-lg px-3 py-2 hover:bg-green-700 transition disabled:bg-gray-100 disabled:text-gray-500"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CurtButton;
