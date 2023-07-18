// cartStore.ts

import {create} from "zustand";

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
  deleteProduct: (itemId: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: items ? items : [],
  addToCart: (item) =>
    set((state) => ({
      cartItems: state.cartItems.some((i) => i.id === item.id)
        ? state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.cartItems, { ...item, quantity: 1 }],
    })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
  deleteProduct: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

const CART_STORAGE_KEY = "cart_items";

// export const useCartStoreWithLocalStorage = create<CartState>((set) => ({
//   cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]"),
//   addToCart: (item) =>
//     set((state) => {
//       const updatedCartItems = state.cartItems.some((i) => i.id === item.id)
//         ? state.cartItems.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           )
//         : [...state.cartItems, { ...item, quantity: 1 }];

//       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCartItems));
//       return { cartItems: updatedCartItems };
//     }),
//   removeFromCart: (itemId) =>
//     set((state) => {
//       const updatedCartItems = state.cartItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
//       );

//       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCartItems));
//       return { cartItems: updatedCartItems };
//     }),
//   deleteProduct: (itemId) =>
//     set((state) => {
//       const updatedCartItems = state.cartItems.filter(
//         (item) => item.id !== itemId
//       );

//       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCartItems));
//       return { cartItems: updatedCartItems };
//     }),
//   clearCart: () => {
//     localStorage.removeItem(CART_STORAGE_KEY);
//     set({ cartItems: [] });
//   },
// }));

export default useCartStore;
