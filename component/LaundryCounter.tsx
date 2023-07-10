"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 2px;
  background: var(--primary-20);
  padding: 5%;
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
`;

const BagCountSection = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BagCountTitle = styled.p`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const CounterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const CounterButton = styled.button`
  background-color: var(--primary-20);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0;
    width: 40px;
    height: 40px;
  }
`;

const PlanButton = styled.button<{ selected: boolean }>`
  background-color: var(--primary-20);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    border-radius: 8px;
    padding: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
  }
`;

const TotalDisplay = styled(motion.div)`
  font-size: 1.5rem;
  margin-top: 1rem;

  sub {
    color: #605c5c;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const LaundryCount: React.FC = () => {
  const [bagCount, setBagCount] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [total, setTotal] = useState(13000);

  const handleIncrement = () => {
    setBagCount((prevCount) => prevCount + 1);
    calculateTotal(bagCount + 1);
  };

  const handleDecrement = () => {
    if (bagCount > 0) {
      setBagCount((prevCount) => prevCount - 1);
      calculateTotal(bagCount - 1);
    }
  };

  const calculateTotal = (count: number) => {
    if (selectedPlan === "weekly") {
      setTotal(13000 * count * 4);
    } else if (selectedPlan === "twiceWeekly") {
      setTotal(13000 * count * 2);
    } else {
      setTotal(13000 * count);
    }
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    calculateTotal(bagCount);
  };

  return (
    <Container>
      <BagCountSection>
        <BagCountTitle>Bag Count</BagCountTitle>
      </BagCountSection>
      <CounterContainer>
        <CounterButton onClick={handleDecrement}>-</CounterButton>
        <span style={{ fontSize: "1.5rem", margin: "0 0.5rem" }}>
          {bagCount}
        </span>
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </CounterContainer>
      <BagCountSection>
        <BagCountTitle>Regularity</BagCountTitle>
      </BagCountSection>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PlanButton
          selected={selectedPlan === "monthly"}
          onClick={() => handlePlanSelect("monthly")}
        >
          Once a Month
        </PlanButton>
        <PlanButton
          selected={selectedPlan === "weekly"}
          onClick={() => handlePlanSelect("weekly")}
        >
          Once a Week
        </PlanButton>
        <PlanButton
          selected={selectedPlan === "twiceWeekly"}
          onClick={() => handlePlanSelect("twiceWeekly")}
        >
          Twice a Week
        </PlanButton>
      </div>
      <TotalDisplay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "1.5rem", marginTop: "1rem" }}
      >
        Total: {total} <sub>/ Month</sub>
      </TotalDisplay>
    </Container>
  );
};

export default LaundryCount;
