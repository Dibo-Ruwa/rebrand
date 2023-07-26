"use client";
import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  StateStorage,
} from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import {
  CartItem,
  CartState,
  Product,
  Subscription,
} from "@/utils/types/types";
import {
  addCartItemAPI,
  getCartAPI,
  removeCartItemAPI,
  updateItemQuantityAPI,
} from "@/utils/services/cart";
import {
  addSubscriptionAPI,
  getSubscriptionsAPI,
  removeSubscriptionAPI,
} from "@/utils/services/subscriptions";

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        subscriptions: [],
        getCart: async () => {
          try {
            const response = await getCartAPI(); // Call the API function to fetch the cart
            set({ cartItems: response.data.cart.cartItems });
          } catch (error) {
            console.log(error);
          }
        },
        getSubscriptions: async () => {
          try {
            const response = await getSubscriptionsAPI(); // Call the API function to fetch the cart
            set({ subscriptions: response.data.subscriptions });
          } catch (error) {
            console.log(error);
          }
        },
        addSubscription: async (subscription) => {
          try {
            const response = await addSubscriptionAPI(subscription);
            set((state) => ({
              subscriptions: [...response.data.subscriptions],
            }));
          } catch (error) {
            console.log(error);
          }
        },
        removeSubscription: async (id) => {
          const response = await removeSubscriptionAPI(id);
          set((state) => ({
            subscriptions: [...response.data.subscriptions],
          }));
        },

        addToCart: async (productObj) => {
          try {
            const response = await addCartItemAPI(productObj);

            set((state) => ({
              cartItems: [...state.cartItems, ...response.data.cart.cartItems],
            }));
          } catch (error) {
            console.log(error);
          }
        },
        removeFromCart: async (id) => {
          try {
            const response = await removeCartItemAPI(id);

            set((state) => ({
              cartItems: [...response.data.cart.cartItems],
            }));
          } catch (error) {
            console.log(error);
          }
        },
        updateQuantity: async (id, action) => {
          // Call the API to update the quantity of the cart item
          try {
            const response = await updateItemQuantityAPI(id, action);
            // If the API call is successful, update the local state with the updated quantity
            set((state) => ({
              cartItems: [...response.data.cart.cartItems],
            }));
          } catch (error) {
            // Handle errors if needed
          }
        },
        clearCart: () => set(() => ({ cartItems: [] })),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);

export default useCartStore;
