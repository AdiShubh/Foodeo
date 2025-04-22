import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      getTotalQuantity: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },

      addItemToCart: (item) => {
        const existingItem = get().cartItems.find(
          (cartItem) => cartItem._id === item._id
        );

        if (existingItem) {
          set({
            cartItems: get().cartItems.map((cartItem) =>
              cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          set({
            cartItems: [...get().cartItems, { ...item, quantity: 1 }],
          });
        }
      },

      increaseQuantity: (itemId) => {
        set({
          cartItems: get().cartItems.map((item) =>
            item._id === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      decreaseQuantity: (itemId) => {
        const currentItem = get().cartItems.find(
          (item) => item._id === itemId
        );

        if (!currentItem) return;

        if (currentItem.quantity === 1) {
          set({
            cartItems: get().cartItems.filter(
              (item) => item._id !== itemId
            ),
          });
        } else {
          set({
            cartItems: get().cartItems.map((item) =>
              item._id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        }
      },

      removeFromCart: (itemId) => {
        set({
          cartItems: get().cartItems.filter(
            (item) => item._id !== itemId
          ),
        });
      },
    }),
    {
      name: "cart-items", // key for localStorage
    }
  )
);

export default useCartStore;
