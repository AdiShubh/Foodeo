import React from "react";
import CustomButton from "../Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import useCartStore from "../../store/CartStore";
import { toast } from "react-toastify";

const StepperInput = ({ item }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCartStore();
  const itemId = item._id;

  const onIncreaseQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem._id === itemId);

    if (item && item.quantity >= 5) {
      // Display toast error if quantity exceeds 5
      toast.error("You can add a maximum of 5 units for this item.");
    } else {
      // Otherwise, call the increaseQuantity function
      increaseQuantity(itemId);
    }
  };

  const onDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  return (
    <div>
      <div className="flex ">
        <CustomButton
          size="xs"
          color="gray_200"
          shape="circle"
          onClick={() => onDecreaseQuantity(itemId)}
        >
          <FaMinus />
        </CustomButton>
        <div className="w-8 text-center text-gray-600 ">
          <p>{item.quantity}</p>
        </div>
        <CustomButton
          size="xs"
          color="gray_200"
          shape="circle"
          onClick={() => onIncreaseQuantity(itemId)}
        >
          <FaPlus />
        </CustomButton>
      </div>
    </div>
  );
};

export default StepperInput;
