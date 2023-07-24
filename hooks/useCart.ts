"use client";
import useCartStore from "@/store/useCart.store";
import { useMounted } from "./useMounted";

export const useCart = () => {
  // Client Global State
  const { cartItems } = useCartStore();

  const mounted = useMounted();

  // Quantity Mapping
  const qtyMap = new Map<number, number>();
  cartItems.forEach((item) => {
    qtyMap.set(item.id, item.quantity);
  });

  const cartData = cartItems.map((item) => {
    const { title, total, price, imgUrl } = item;
    return {
      id: item.id,
      title,
      price,
      imgUrl,
      quantity: qtyMap.get(item.id) || 1,
      total: total,
    };
  });

  let totalPrice = "0";
  let totalQuantity = 0;

  if (cartData) {
    totalPrice = cartData
      .reduce(
        (accumulator: number, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      )
      .toLocaleString();
  }

  totalQuantity = cartItems.reduce(
    (accumulator: number, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return { cartData, totalPrice, totalQuantity };
};
