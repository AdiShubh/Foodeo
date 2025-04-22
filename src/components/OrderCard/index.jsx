import React from "react";
import CustomButton from "../Button";
import StepperInput from "../InputStepper";
import useCartStore from "../../store/CartStore";
import { toast } from "react-toastify";
import StarRatings from "../Ratings";

const OrderCard = ({ item }) => {
  const {
    cartItems,
    addItemToCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalQuantity,
  } = useCartStore();
  const itemId = item._id;

  const itemsInCart = getTotalQuantity();

  // const AddToCart = () => {
  //   // Find the specific item in the cart by its ID (assuming items have unique IDs)
  //   const existingCartItem = cartItems.find(
  //     (cartItem) => cartItem.id === item.id
  //   );

  //   // Check if the cart already contains 3 unique items
  //   if (cartItems.length >= 3 && !existingCartItem) {
  //     toast.error("You can add a maximum of 3 unique items to the cart.");
  //     return;
  //   }

  //   // Check if the quantity of the current item exceeds 5
  //   if (existingCartItem && existingCartItem.quantity >= 5) {
  //     toast.error("You can add a maximum of 5 units of this item.");
  //     return;
  //   }

  //   // Add the item to the cart (this could include increasing its quantity)
  //   addItemToCart(item);

  //   toast.success("Item added to cart. Check Cart for checkout.");
  // };


  const AddToCart = () => {
    console.log("🛒 Trying to add item:", item);
  
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
  
    console.log("📦 Existing in cart:", existingCartItem);
  
    if (cartItems.length >= 3 && existingCartItem) {
      toast.error("You can add a maximum of 3 unique items to the cart.");
      return;
    }
    if (existingCartItem && existingCartItem.quantity >= 5) {
      toast.error("You can add a maximum of 5 units of this item.");
      return;
    }
  
    addItemToCart(item);
    toast.success("Item added to cart. Check Cart for checkout.");
  };


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
      <div>
        <StarRatings rating={item.ratings} />
      </div>
      <div className="text-center text-gray-800 text-sm">
        <p>{item.text}</p>
      </div>

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
