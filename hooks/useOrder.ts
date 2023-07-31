// useOrder.ts
import { useState } from "react";

import axios from "axios";
import { CartItem, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { User } from "next-auth";
import { usePaystackPayment } from "react-paystack";

interface CartOrderData {
  cartItems: CartItem[];
  user: User;
}

interface SubscriptionOrderData {
  subscription: Subscription;
  user: User;
}

const useOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: session } = useSession();

  const onSuccess = (reference: string) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  // const initializeCartPayment = usePaystackPayment(onSuccess, onClose)

  const handleCartOrderSubmit = async (amount: number) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    const publicKey = "";

    const config = {
      reference: new Date().getTime().toString(),
      email: session?.user.email,
      amount,
      publicKey,
    };

    try {
      await axios.post("/api/order/cart", {
        data: "hhhh",
      });

      // useCartStore.getState().clearCart();

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
      const { subscription } = subscriptionOrderData;

      await axios.post("/order/subscription", {
        subscription,
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
