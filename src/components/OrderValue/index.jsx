import React from "react";
import useCartStore from "../../Store/CartStore";
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
      {/* <div className=" pb-10 px-8 mt-24 py-3 shadow-sm rounded-lg bg-white">
        <h3 className="font-bold text-center text-2xl mb-5 py-2 ">
          Order Value
        </h3>

        <h3 className="text-xl text-center  ">
          Total Quantity: <span className="font-bold"> {quantity}</span>
        </h3>
        <h3 className="text-xl text-center mt-5  ">
          Total Price: <span className="font-bold">$ {price}</span>
        </h3>

        <div className="flex justify-center mt-7">
          <CustomButton color="red" shape="round" size="lg">
            Checkout
          </CustomButton>
        </div>
      </div> */}
    </div>
  );
};

export default OrderValue;
