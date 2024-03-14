import React from "react";
import CustomButton from "../Button";
import StepperInput from "../InputStepper";
import useCartStore from "../../Store/CartStore";
import { toast } from "react-toastify";

const OrderCard = ({ item }) => {
  const { cartItems, addItemToCart, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const itemId = item.id;

  const AddToCart = () => {
    addItemToCart(item);

    toast.success("Item Added to cart. Check Cart for checkout.");
  };
  const onIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const onDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };
  //console.log(cartItems);

  //console.log(item);
  return (
    <div className="flex flex-col gap w-[320px] p-[25px] max-w-[1112px] bg-slate-100 rounded-2xl">
      <div>
        <img
          src={item.image}
          alt="image"
          className="w-[270px] my-1.5  md:h-auto  object-cover"
        />
      </div>
      <div className="text-center text-2xl my-2 font-semibold">
        <p>{item.name}</p>
      </div>
      <div className="text-center text-gray-800 text-sm">
        <p>{item.text}</p>
      </div>
      {/* <div className="text-xl">{item.ratings}</div> */}

      <p className="text-center text-2xl my-4">$ {item.price}</p>

      <CustomButton
        color="red"
        shape="round"
        size="sm"
        onClick={() => AddToCart()}
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default OrderCard;
