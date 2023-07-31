"use client";
import { useCart } from "@/hooks/useCart";
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore, { getTotalQuantityAndPrice } from "@/store/useCart.store";
import { useSession } from "next-auth/react";
import { PaystackConsumer, usePaystackPayment } from "react-paystack";
import {v4 as uuidv4} from 'uuid'
const publicKey = "";

const Payment = () => {
  const { data: session } = useSession();

  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = getTotalQuantityAndPrice(cartItems, subscriptions);
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();
 

 

  const referenceId = uuidv4()

  const onSuccess = () => {
    handleCartOrderSubmit(referenceId,totalPrice);
  };

  const onClose = () => {
    console.log("closed");
  };

  const config = {
    reference: referenceId,
    email: session ? session.user.email : "",
    amount: totalPrice,
  
    publicKey,
  };

  const initializePayment = usePaystackPayment(config);

  const { totalQuantity } = useCart();
  return (
    <Container>
      <Column>
        <strong>Items</strong> <span>{totalQuantity}</span>
      </Column>
      <Column>
        <strong>Total</strong> <span>${totalPrice}</span>
      </Column>
      <PayButton
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay ${totalPrice}
      </PayButton>
    </Container>
  );
};

export default Payment;
