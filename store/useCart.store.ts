"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
};

type CartItem = Product & {
  quantity: number;
  total: number;
};

const items: CartItem[] = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    imgUrl: "https://example.com/product1.jpg",
    category: "Electronics",
    quantity: 2,
    total: 59.98,
  },
  {
    id: 4,
    title: "Product 4",
    price: 29.99,
    imgUrl: "https://example.com/product1.jpg",
    category: "Electronics",
    quantity: 4,
    total: 59.98,
  },
  {
    id: 8,
    title: "Product 7",
    price: 29.99,
    imgUrl: "https://example.com/product1.jpg",
    category: "Electronics",
    quantity: 2,
    total: 59.98,
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    imgUrl: "https://example.com/product2.jpg",
    category: "Clothing",
    quantity: 1,
    total: 49.99,
  },
  // Add more items here...
];

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (id: number, action: "increase" | "decrease") => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: items,
  addToCart: (productObj) =>
    set((state) => addCartItem(state.cartItems, productObj)),
  removeFromCart: (id) => set((state) => removeCartItem(state.cartItems, id)),
  updateQuantity: (id, action) =>
    set((state) => updateItemQuantity(state.cartItems, id, action)),
  clearCart: () => set(() => ({ cartItems: [] })),
}));

/* ===== Cart Store Util Functions ===== */
function addCartItem(state: CartItem[], bookObj: CartItem) {
  const cartArray = state.filter((item) => item.id !== bookObj.id);
  const newItem = { ...bookObj, timestamp: Date.now() };
  return { cartItems: [...cartArray, newItem] };
}

function removeCartItem(state: CartItem[], id: number) {
  const removedCart = state.filter((item) => item.id !== id);
  return { cartItems: [...removedCart] };
}

function updateItemQuantity(
  state: CartItem[],
  id: number,
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
