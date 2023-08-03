// useOrder.ts
import { useEffect, useState } from "react";

import axios from "axios";
import { CartItem, Order, Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

interface CartOrderData {
  cartItems: CartItem[];
  user: User;
}

interface SubscriptionOrderData {
  subscription: Subscription;
}

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();

  const getOrders = () => {
    setIsSubmitting(true);
    // Fetch orders
    axios.get("/api/order").then((response) => {
      setOrders(response.data.orders);
      setIsSubmitting(false);
    });
  };

  const handleCartOrderSubmit = async (referenceId: string, amount: number) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const { data } = await axios.post("/api/order/cart", {
        referenceId,
      });
      toast.loading("Cart order is being proccessed", {
        duration: 2000,
      });

      setTimeout(() => {
        useCartStore.getState().getCart();

        setIsSuccess(true);
        toast.success("Cart order submitted successfully!");
      }, 500);
      router.push(`/dashboard/${data.order?._id}`);
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

      const { data } = await axios.put(
        `/api/order/subscription/${subscription?._id}`,
        {
          referenceId,
        }
      );

      toast.loading("Subcription order is being proccessed", {
        duration: 2000,
      });

      setTimeout(() => {
        useCartStore.getState().getSubscriptions();

        setIsSuccess(true);
        toast.success("Subscription order submitted successfully!");
      }, 500);
      router.push(`/dashboard/${data.order?._id}`);
    } catch (error) {
      setIsError(true);
      toast.error("Error submitting subscription order."); // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };



  const getOrderById = (orderId: string) => {
    setIsSubmitting(true);
    // Fetch order details by orderId
    axios.get(`/api/order/${orderId}`).then((response) => {
      setOrder(response.data.order);
      setIsSubmitting(false);
    });
  };

  return {
    isSubmitting,
    isError,
    isSuccess,
    orders,
    order,
    getOrders,
    getOrderById,
    handleCartOrderSubmit,
    handleSubscriptionOrderSubmit,
  };
};

export default useOrder;
