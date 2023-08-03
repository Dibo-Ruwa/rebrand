"use client";
import React from "react";
import styled from "styled-components";
import useOrder from "@/hooks/useOrder";
import { Order } from "@/utils/types/types";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

// Styled Components
const OrderHistoryContainer = styled.div`
  h1 {
    margin: 30px 0;
  }
`;
const OrderListing = styled.div`
  border: 1px solid var(--primary-20);
  border-radius: 20px;
  overflow: hidden;
`;

const OrderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 25px;

  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color4-20);
  }
  &.header {
    background-color: var(--primary-20);
  }
`;

const ColumnHeader = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  padding: 8px;
`;

const ColumnData = styled.div`
  padding: 8px;

  button {
    outline: none;
    border: none;
    background: none;
    font-size: 20px;
    color: var(--primary);
  }
`;

// Order History Component
const OrderList: React.FC = () => {
  const { orders, getOrderById } = useOrder();
 
  const router = useRouter();
  const handleOrderClick = (orderId: string) => {
    router.push(`/dashboard/${orderId}`);
  };

  return (
    <OrderHistoryContainer>
      <h1>Order History</h1>
      {orders.length > 0 && (
        <OrderListing>
          <OrderRow className="header">
            <ColumnHeader>Type</ColumnHeader>
            <ColumnHeader>email</ColumnHeader>
            <ColumnHeader>PaymentId</ColumnHeader>
            <ColumnHeader>Total</ColumnHeader>
          </OrderRow>
          {orders.map((order: Order) => (
            <OrderRow key={order._id}>
              <ColumnData>{order.type}</ColumnData>
              <ColumnData>{order.email}</ColumnData>
              <ColumnData>{order.paymentId.slice(-5)}</ColumnData>
              <ColumnData>{order.total}</ColumnData>
              <ColumnData>
                <button onClick={() => handleOrderClick(order._id)}>
                  <EyeOpenIcon />
                </button>
              </ColumnData>
            </OrderRow>
          ))}
        </OrderListing>
      )}
    </OrderHistoryContainer>
  );
};

export default OrderList;
