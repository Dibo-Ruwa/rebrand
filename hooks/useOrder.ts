// useOrder.ts
import { useState } from "react";

import axios from "axios";
import { Product, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";

interface CartOrderData {
  cartItems: Product[];
  userDetails: any;
}

interface SubscriptionOrderData {
  subscription: Subscription;
  userDetails: any;
}

const useOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: session } = useSession();

  const handleCartOrderSubmit = async (cartOrderData: CartOrderData) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { cartItems, userDetails } = cartOrderData;

      await axios.post("/order/cart", {
        cartItems,
        userDetails,
      });

      useCartStore.getState().clearCart();

      setIsSuccess(true);
      toast.success("Cart order submitted successfully!"); // Show success toast
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting cart order."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscriptionOrderSubmit = async (
    subscriptionOrderData: SubscriptionOrderData
  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { subscription, userDetails } = subscriptionOrderData;

      await axios.post("/order/subscription", {
        subscription,
        userDetails,
      });

      setIsSuccess(true);
      toast.success("Subscription order submitted successfully!"); // Show success toast
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting subscription order."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isError,
    isSuccess,
    handleCartOrderSubmit,
    handleSubscriptionOrderSubmit,
  };
};

export default useOrder;
