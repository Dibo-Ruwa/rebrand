"use client";
import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Define the space options and their corresponding prices
const spaceOptions = [
  { value: "bedroom", label: "Bedroom", price: 10 },
  { value: "livingroom", label: "Living Room", price: 15 },
  { value: "toilet", label: "Toilet", price: 5 },
];

// Define the frequency options
const frequencyOptions = [
  { value: "weekly", label: "Once a week" },
  { value: "biweekly", label: "Every 2 weeks" },
  { value: "monthly", label: "Once a month" },
];

const Container = styled.div`
  margin: 20px;
`;

const SpaceContainer = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button`
  font-weight: bold;
  font-size: 16px;
  padding: 4px;
  margin: 0 4px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const Input = styled.input`
  width: 40px;
  text-align: center;
`;

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const CleaningOrderCalculator = () => {
  const [spaces, setSpaces] = useState<{ [key: string]: number }>({});
  const [frequency, setFrequency] = useState<string | null>(null);

  const handleSpaceChange = (space: string, count: number) => {
    setSpaces((prevSpaces) => ({
      ...prevSpaces,
      [space]: count,
    }));
  };

  const handleFrequencyChange = (value: string) => {
    setFrequency(value);
  };

  const incrementCounter = (space: string) => {
    setSpaces((prevSpaces) => ({
      ...prevSpaces,
      [space]: prevSpaces[space] ? prevSpaces[space] + 1 : 1,
    }));
  };

  const decrementCounter = (space: string) => {
    setSpaces((prevSpaces) => ({
      ...prevSpaces,
      [space]:
        prevSpaces[space] && prevSpaces[space] > 0 ? prevSpaces[space] - 1 : 0,
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (const space in spaces) {
      const count = spaces[space];
      const spaceOption = spaceOptions.find((option) => option.value === space);
      if (spaceOption) {
        totalPrice += spaceOption.price * count;
      }
    }

    return totalPrice;
  };

  return (
    <Container>
      <h2>Tell us about your home</h2>
      {spaceOptions.map((option) => (
        <SpaceContainer key={option.value}>
          <Label>{option.label}: </Label>
          <Counter>
            <CounterButton onClick={() => decrementCounter(option.value)}>
              -
            </CounterButton>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              <Input
                type="text"
                value={spaces[option.value] || 0}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSpaceChange(option.value, parseInt(e.target.value) || 0)
                }
              />
            </motion.span>
            <CounterButton onClick={() => incrementCounter(option.value)}>
              +
            </CounterButton>
          </Counter>
        </SpaceContainer>
      ))}

      <h2>Frequency</h2>
      {frequencyOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleFrequencyChange(option.value)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            fontWeight: frequency === option.value ? "bold" : "normal",
            backgroundColor:
              frequency === option.value ? "#f0f0f0" : "transparent",
            cursor: "pointer",
          }}
        >
          {option.label}
        </button>
      ))}

      <h2>Total Price: {calculateTotalPrice()} USD</h2>
    </Container>
  );
};

export default CleaningOrderCalculator;
