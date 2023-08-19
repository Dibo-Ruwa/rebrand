"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.button`
  padding: 10px 25px;
  border-radius: 8px;
  border: 1px solid var(--primary);
  outline: none;
  background: transparent;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    border: 1px solid var(--primary);

    color: var(--primary);
  }
`;

const BackButton = () => {
  const router = useRouter();
  return (
    <Container onClick={() => router.back()}>
      <ArrowLeftIcon /> <span>Back</span>
    </Container>
  );
};

export default BackButton;
