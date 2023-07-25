'use client'
import { Subscription } from '@/utils/types/types';
import React from 'react';
import styled from 'styled-components';


interface CartSubscriptionProps {
  subscription: Subscription;
  onDelete?: () => void;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
`;

const CartSubscription: React.FC<CartSubscriptionProps> = ({ subscription, onDelete }) => {
  const { type, plan } = subscription;

  return (
    <Card>
      <h3>{type}</h3>
      {typeof plan === 'string' ? (
        <p>{plan}</p>
      ) : (
        <>
          <p>Bag Count: {plan.bagCount}</p>
          <p>Regularity: {plan.regularity}</p>
          <p>Total: {plan.total}</p>
        </>
      )}
      <button onClick={onDelete}>Delete</button>
    </Card>
  );
};

export default CartSubscription;
