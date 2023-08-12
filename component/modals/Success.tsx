"use client";

import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import { ErrorIcon } from "react-hot-toast";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-20);
  backdrop-filter: blur(8px);
`;
const Container = styled.div`
  background: #fff;
  width: 30%;
  border-radius: 16px;
  padding: 20px;
`;
const Icon = styled.div``;
const Text = styled.div``;
const BtnGrp = styled.div``;

interface SuccessModal {
  open: boolean;
  message: string;
  type: "success" | "error";
  close: () => void;
}

const Success: FC<SuccessModal> = ({ open, message, type }) => {
  const router = useRouter();

  if (!open) return null;

  return (
    <Overlay
      style={
        open
          ? { display: "flex" }
          : {
              display: "none",
            }
      }
    >
      <Container>
        <Icon>{type === "success" ? <CheckCircledIcon /> : <ErrorIcon />}</Icon>

        <Text>{message}</Text>

        <BtnGrp>
          <button
            className="cancel"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </button>
          <button
            className="cancel"
            onClick={() => {
              close();
              router.push("/cart");
            }}
          >
            Go to Cart
          </button>
        </BtnGrp>
      </Container>
    </Overlay>
  );
};

export default Success;
