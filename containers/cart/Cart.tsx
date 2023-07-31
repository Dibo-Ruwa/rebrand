"use client";
import EmptyCart from "@/component/EmptyCart";
import Payment from "@/component/Payment/Payment";
import CartItem from "@/component/cartItem/CartItem";
import CartSubscription from "@/component/subscriptionCardCart/SubscriptionCardCart";
import Loader from "@/component/ui/loader/Loader";
import { useCart } from "@/hooks/useCart";
import { useMounted } from "@/hooks/useMounted";
import useCartStore, { getTotalQuantityAndPrice } from "@/store/useCart.store";
import { Subscription } from "@/utils/types/types";
import React from "react";
import styled from "styled-components";

const CartPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .cart__items,
  .payment {
    flex: 1;
  }
  padding: 15vh 8% 5%;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin: 30px 0; */
`;

const ClearCartButton = styled.button`
  padding: 12px 25px;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: var(--color2);
  color: #fff;
`;

const Cart: React.FC = () => {
  const { cartItems, clearCart, subscriptions, removeSubscription } = useCartStore();
  const { totalQuantities, totalPrice } = getTotalQuantityAndPrice(
    cartItems,
    subscriptions
  );
  const { cartData } = useCart();

  const mounted = useMounted();
  const handlePay = () => {
    // Perform payment logic here
  };

  const handleDelete = (id: string) => {};

  return (
    <CartPageContainer>
      {mounted ? (
        totalQuantities >= 1 ? (
          <>
            <div className="cart__items">
              <CartItemsContainer>
                {cartData.length > 0 && cartData.map((item: any) => (
                  <div key={item.id}>
                    <CartItem item={item} />
                  </div>
                ))}
                {subscriptions?.length > 0 &&
                  subscriptions.map((subscription: Subscription) => (
                    <CartSubscription
                      key={subscription._id}
                      subscription={subscription}
                      onDelete={() => removeSubscription(subscription._id)}
                    />
                  ))}
              </CartItemsContainer>
              <div className="btn">
                <ClearCartButton onClick={clearCart}>
                  Clear Cart
                </ClearCartButton>
              </div>
            </div>

            <div className="payment">
              <Payment />
            </div>
          </>
        ) : (
          <EmptyCart />
        )
      ) : (
        <Loader />
      )}
    </CartPageContainer>
  );
};

export default Cart;
