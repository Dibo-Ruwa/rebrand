"use client";

import { FC } from "react";
import { Container, CounterBtn, CounterValue } from "./counter.styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProp {
  id: string;
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Counter: FC<CounterProp> = ({ value, id, onDecrement, onIncrement }) => {
  return (
    <Container>
      <CounterBtn>
        <AiOutlineMinus />
      </CounterBtn>
      <CounterValue>{value}</CounterValue>
      <CounterBtn>
        <AiOutlinePlus />
      </CounterBtn>
    </Container>
  );
};

export default Counter;
