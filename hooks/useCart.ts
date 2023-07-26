"use client";
import useCartStore from "@/store/useCart.store";
import { useEffect } from "react";

export const useCart = () => {
  // Client Global State
  const { cartItems, getCart, getSubscriptions } = useCartStore();

  useEffect(() => {
    getCart();
    getSubscriptions();
  }, [getCart, getSubscriptions]);

  const cartData: any =
    cartItems.length > 0 &&
    cartItems.map((item: any) => {
      const { title, total, price, imgUrl, quantity } = item;
      console.log(item);
      return {
        id: item?._id,
        title,
        price,
        imgUrl,
        quantity,
        total: total,
      };
    });

  let totalPrice: string | false = "0";
  let totalQuantity: number | false = 0;

  if (cartItems) {
    totalPrice =
      cartItems.length > 0 &&
      cartItems
        .reduce(
          (accumulator: number, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0
        )
        .toLocaleString();
  }

  totalQuantity =
    cartItems.length > 0 &&
    cartItems.reduce(
      (accumulator: number, currentItem) => accumulator + currentItem.quantity,
      0
    );

  return { cartData, totalPrice, totalQuantity };
};
