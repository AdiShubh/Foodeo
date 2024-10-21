import React from "react";
export const getTotal = (cartItems) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};
