import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../../Store/CartStore";
import StepperInput from "../InputStepper";

const OrderSummary = () => {
  const {
    cartItems,
    addItemToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4">
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-md"
              >
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center space-x-4">
                  <StepperInput item={item} />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%):</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span></span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span></span>
          </div>
        </div>
        <button className="mt-8 w-full bg-cyan-300 text-gray-800 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
