// useOrder.ts
import { useState } from "react";

import axios from "axios";
import { CartItem, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { User } from "next-auth";
import { usePaystackPayment } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";

interface CartOrderData {
  cartItems: CartItem[];
  user: User;
}

interface SubscriptionOrderData {
  subscription: Subscription;
}

const useOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: session } = useSession();

  const handleCartOrderSubmit = async (referenceId: string, amount: number) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      await axios.post("/api/order/cart", {
        referenceId,
      });

      useCartStore.getState().getCart();

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
    referenceId: string,
    subscriptionOrderData: SubscriptionOrderData
  ) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { subscription } = subscriptionOrderData;

      await axios.put(`/api/order/subscription/${subscription?._id}`, {
        referenceId,
      });

      useCartStore.getState().getSubscriptions();

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
