import React from "react";
import useCartStore from "../store/CartStore";
import CartItemCard from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useCartStore();

  

  if (!cartItems || cartItems.length < 1) {
    return (
      <div className="text-center text-2xl text-gray-600 bg-gray-200 h-screen  pt-20">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-200">
      <CartItemCard items={cartItems} />
    </div>
  );
};

export default Cart;
