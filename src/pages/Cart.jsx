import React from "react";
import useCartStore from "../Store/CartStore";
import CartItemCard from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useCartStore();

  if (!cartItems || cartItems.length < 1) {
    return (
      <div>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div>
      <CartItemCard item={cartItems} />
    </div>
  );
};

export default Cart;
