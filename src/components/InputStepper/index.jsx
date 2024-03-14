import React from "react";
import CustomButton from "../Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import useCartStore from "../../Store/CartStore";

const StepperInput = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();
  const itemId = item.id;

  const onIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
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
