"use client";
// CartPage.tsx

import CartItem from "@/component/cartItem/CartItem";
import useCartStore from "@/states/useCart.store";
import React from "react";
import styled from "styled-components";

const CartPageContainer = styled.div`

  display: flex;
  justify-content: space-between;

  .cart__items, .payment {
    flex: 1;
  }
  padding: 15vh 8% 5%;

`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
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

const PayButton = styled.button`
  padding: 12px 25px;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
`;

const Cart: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);

  const handlePay = () => {
    // Perform payment logic here
  };

  return (
    <CartPageContainer>
      <div className="cart__items">
        <h1>Cart</h1>
        <CartItemsContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItemsContainer>
        <div className="btn">
          <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
          {/* <PayButton onClick={handlePay}>Pay</PayButton> */}
        </div>
                      </div>
                      <div className="payment">
                                
                      </div>
    </CartPageContainer>
  );
};

export default Cart;
