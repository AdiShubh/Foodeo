import React from "react";
import useCartStore from "../Store/CartStore";
import OrderCard from "../components/OrderCard";
import CartItemCard from "../components/CartItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/Button";

const Cart = () => {
  const { cartItems } = useCartStore();

  if (cartItems && cartItems.length < 1) {
    return (
      <>
        <Navbar />
        <div className="h-72 flex flex-col bg-gray-200 items-center justify-center">
          <h2 className="text-3xl mt-10 mb-5 font-bold">Cart is Empty</h2>
          <CustomButton color="red" shape="round" size="lg">
            Order Now
          </CustomButton>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <CartItemCard item={cartItems} />
    </div>
  );
};

export default Cart;
