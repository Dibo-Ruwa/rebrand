"use client";
import useOrder from "@/hooks/useOrder";
import { Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import React from "react";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";
import { PayButton } from "../Payment/payment.styles";
import { usePaystackPayment } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import { Card } from "./subscriptionCardCart.styles";

interface CartSubscriptionProps {
  subscription: Subscription;
  onDelete?: () => void;
}

const CartSubscription: React.FC<CartSubscriptionProps> = ({
  subscription,
  onDelete,
}) => {
  const { data: session } = useSession();
  const { isSubmitting, isError, isSuccess, handleSubscriptionOrderSubmit } =
    useOrder();
  const { type, plan } = subscription;

  const referenceId = uuidv4();

  const onSuccess = () => {
    handleSubscriptionOrderSubmit(referenceId, { subscription });
  };

  const onClose = () => {
    console.log("closed");
  };

  const publicKey = "pk_test_aa151675a5dd4dcccede80346dd579becf26e6ef";

  const config = {
    reference: referenceId,
    amount: subscription.total * 100,
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
        className="payBtn"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Subscribe
      </button>
    );
  };

  return (
    <Card>
      <h3>{type}</h3>
      {typeof plan === "string" ? (
        <>
          <p>{plan}</p>
          <p>
            Total: <span>{subscription.total}</span>
          </p>
        </>
      ) : (
        <>
          <p>
            Bag Count: <span>{plan.bagCount}</span>{" "}
          </p>
          <p>
            Regularity: <span> {plan.regularity}</span>
          </p>
          <p>
            Total: <span>{subscription.total}</span>
          </p>
        </>
      )}
      <PaymentBtn />
      <button className="delBtn" onClick={onDelete}>
        <VscClose />
      </button>
    </Card>
  );
};

export default CartSubscription;
