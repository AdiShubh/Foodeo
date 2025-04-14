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
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },

      increaseQuantity: (itemId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === itemId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        }
      },
      decreaseQuantity: (itemId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === itemId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== itemId
              );

              set({ cartItems: updatedCartItems });
            } else if (itemExists.quantity > 1) {
              itemExists.quantity--;

              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },
      removeFromCart: (itemId) => {
        const updatedCartItems = get().cartItems.filter(
          (item) => item.id !== itemId
        );
        set({ cartItems: updatedCartItems });
      },
    }),
    {
      name: "cart-items",
    }
  )
);

export default useCartStore;
