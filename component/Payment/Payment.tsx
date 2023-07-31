"use client";
import { useCart } from "@/hooks/useCart";
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore, { getTotalQuantityAndPrice } from "@/store/useCart.store";

const Payment = () => {
  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = getTotalQuantityAndPrice(cartItems, subscriptions);
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();
  const handleCartOrder = () => {
    handleCartOrderSubmit(totalPrice);
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
      <PayButton onClick={handleCartOrder}>Pay ${totalPrice}</PayButton>
    </Container>
  );
};

export default Payment;
