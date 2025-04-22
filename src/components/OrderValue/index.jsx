import React from "react";
import useCartStore from "../../store/CartStore";
import CustomButton from "../Button";
import { toast } from "react-toastify";
import { getTotal } from "../../Utils/utils";
import { useNavigate } from "react-router-dom";

const OrderValue = () => {
  const { cartItems } = useCartStore();
  const { totalQuantity, totalPrice } = getTotal(cartItems);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-8 text-white  p-4 justify-end items-center bg-gray-500 rounded-md">
        <p className="text-lg">
          <span className="text-lg font-semibold">Total Items in Cart :</span>{" "}
          {totalQuantity}
        </p>
        <p className="text-lg">
          <span className="text-lg font-semibold">Total Price : </span>$
          {totalPrice}
        </p>
        <CustomButton
          color="red"
          shape="round"
          size="md"
          onClick={() => navigate("/Checkout")}
        >
          Checkout
        </CustomButton>
      </div>
     
    </div>
  );
};

export default OrderValue;
