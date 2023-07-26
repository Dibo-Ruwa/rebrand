"use client";
import { Subscription } from "@/utils/types/types";
import React from "react";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";

interface CartSubscriptionProps {
  subscription: Subscription;
  onDelete?: () => void;
}

const Card = styled.div`
  border: 1px solid var(--color2);
  background: var(--color2-20);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  max-width: 300px;
  position: relative;

  h3 {
    font-size: 18px;
    margin-bottom: 7px;
  }

  p {
    margin-bottom: 5px;
    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }

  .delBtn {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    background: rgba(241, 107, 107, 0.351);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: #f16b6b;
    }
  }

  .payBtn {
    border-radius: 8px;
    padding: 10px 17px;
    outline: none;
    margin-top: 20px;
    border: none;
    background: var(--color2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: #f16b6b;
    }
  }
`;

const CartSubscription: React.FC<CartSubscriptionProps> = ({
  subscription,
  onDelete,
}) => {
  const { type, plan } = subscription;

  return (
    <Card>
      <h3>{type}</h3>
      {typeof plan === "string" ? (
        <p>{plan}</p>
      ) : (
        <>
          <p>
            Bag Count: <span>{plan.bagCount}</span>{" "}
          </p>
          <p>
            Regularity: <span> {plan.regularity}</span>
          </p>
          <p>
            Total: <span>{plan.total}</span>
          </p>
        </>
      )}
      <button className="payBtn">Sudscribe</button>
      <button className="delBtn" onClick={onDelete}>
        <VscClose />
      </button>
    </Card>
  );
};

export default CartSubscription;