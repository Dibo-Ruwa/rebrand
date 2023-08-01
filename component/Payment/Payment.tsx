"use client";
import { useCart } from "@/hooks/useCart";
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore, { getTotalQuantityAndPrice } from "@/store/useCart.store";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";

const Payment = () => {
  const { data: session } = useSession();

  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = getTotalQuantityAndPrice(cartItems, subscriptions);
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();

  const referenceId = uuidv4();

  const onSuccess = () => {
    handleCartOrderSubmit(referenceId, totalPrice);
  };

  const onClose = () => {
    console.log("closed");
  };

  const publicKey = process.env.PAYSTACK_KEY ? process.env.PAYSTACK_KEY : "";

  const config = {
    reference: referenceId,
    amount: totalPrice * 100,
    email: session ? session?.user.email : "",
    custom_fields: {
      email: session ? session?.user.email : "",
      phone_number: session ? session?.user.phone : "",
      name: session
        ? `${session?.user.firstName} ${session?.user.lastName}`
        : "",
    },
    publicKey,
  };
  const PaymentBtn = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay {totalPrice}
      </button>
    );
  };

  const { totalQuantity } = useCart();
  return (
    <Container>
      <Column>
        <strong>Items</strong> <span>{totalQuantity}</span>
      </Column>
      <Column>
        <strong>Total</strong> <span>${totalPrice}</span>
      </Column>
      <PaymentBtn />
    </Container>
  );
};

export default Payment;
