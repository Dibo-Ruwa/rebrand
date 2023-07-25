"use client";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type Product = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
};

interface Subscription {
  id?: string;
  type: string;
  plan:
    | {
        bagCount: number;
        regularity: string;
        total: number;
      }
    | string;
}

type CartItem = Product & {
  quantity: number;
  total: number;
};

type CartState = {
  cartItems: CartItem[];
  subscriptions: Subscription[];
  addSubscription: (item: Subscription) => void;
  removeSubscription: (itemId: string) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (id: string, action: "increase" | "decrease") => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  subscriptions: [],
  addSubscription: (subscription) =>
    set((state) => addSubscription(state.subscriptions, subscription)),
  removeSubscription: (id) =>
    set((state) => removeSubscription(state.subscriptions, id)),
  addToCart: (productObj) =>
    set((state) => addCartItem(state.cartItems, productObj)),
  removeFromCart: (id) => set((state) => removeCartItem(state.cartItems, id)),
  updateQuantity: (id, action) =>
    set((state) => updateItemQuantity(state.cartItems, id, action)),
  clearCart: () => set(() => ({ cartItems: [] })),
}));

/* ===== Subscription Store Util Functions ===== */
function addSubscription(state: Subscription[], product: Subscription) {
  const subscriptionArray = state.filter((item) => item.id !== product.id);

  const newItem = { ...product, id: uuidv4() };
  return { subscriptions: [...subscriptionArray, newItem] };
}

function removeSubscription(state: Subscription[], id: string) {
  const removedCart = state.filter((item) => item.id !== id);
  return { subscriptions: [...removedCart] };
}
/* ===== Cart Store Util Functions ===== */
function addCartItem(state: CartItem[], product: Product) {
  const cartArray = state.filter((item) => item.id !== product.id);

  const newItem = {
    ...product,
    id: uuidv4(),
    quantity: 1,
    total: product.price,
  };
  return { cartItems: [...cartArray, newItem] };
}

function removeCartItem(state: CartItem[], id: string) {
  const removedCart = state.filter((item) => item.id !== id);
  return { cartItems: [...removedCart] };
}

function updateItemQuantity(
  state: CartItem[],
  id: string,
  action: "increase" | "decrease"
) {
  const objIndex = state.findIndex((obj) => obj.id == id);

  if (action === "increase") {
    state[objIndex].quantity = state[objIndex].quantity + 1;
  } else if (action === "decrease") {
    state[objIndex].quantity =
      state[objIndex].quantity - (state[objIndex].quantity > 1 ? 1 : 0);
  }

  return { cartItems: [...state] };
}

export default useCartStore;
