"use client";
import { useCart } from "@/hooks/useCart";
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore from "@/store/useCart.store";

const Payment = () => {
  const { cartItems } = useCartStore();
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();
  const handleCartOrder = () => {
    const cartOrderData = {
      cartItems,
      userDetails: {
        // Populate the user details data here
      },
    };

    handleCartOrderSubmit(cartOrderData);
  };

  const { totalPrice, totalQuantity } = useCart();
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
