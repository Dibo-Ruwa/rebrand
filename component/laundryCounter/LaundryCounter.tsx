"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  BagCountSection,
  BagCountTitle,
  Container,
  CounterButton,
  CounterContainer,
  Footer,
  PlanButton,
  TotalDisplay,
} from "./laundryCounter.styles";
import Button from "../ui/button/Button";
import useCartStore from "@/store/useCart.store";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const LaundryCount: React.FC = () => {
  const { addSubscription, subscriptions } = useCartStore();
  const [bagCount, setBagCount] = useState<number>(1);
  const [regularity, setRegularity] = useState<string>("monthly");
  const [total, setTotal] = useState<number>(13000);

  const calculateTotal = useCallback(
    (count: number) => {
      switch (regularity) {
        case "weekly":
          setTotal(13000 * count * 4);
          break;
        case "twiceWeekly":
          setTotal(13000 * count * 2);
          break;
        default:
          setTotal(13000 * count);
      }
    },
    [regularity, setTotal]
  );

  const handlePlanSelect = useCallback(
    (plan: string) => {
      setRegularity(plan);
      calculateTotal(bagCount); // Update the total cost when regularity changes
    },
    [setRegularity, calculateTotal, bagCount]
  );

  const handleIncrement = useCallback(() => {
    setBagCount((prevCount) => prevCount + 1);
    calculateTotal(bagCount + 1);
  }, [setBagCount, bagCount, calculateTotal]);

  const handleDecrement = () => {
    if (bagCount > 0) {
      setBagCount((prevCount) => prevCount - 1);
      calculateTotal(bagCount - 1);
    }
  };

  const ChoosePlan = () => {
    const data = {
      type: "laundry",
      plan: {
        bagCount,
        regularity,
        total,
      },
    };

    addSubscription(data);
  };

  useEffect(() => {
    switch (regularity) {
      case "weekly":
        setTotal(13000 * bagCount * 4);
        break;
      case "twiceWeekly":
        setTotal(13000 * bagCount * 2);
        break;
      default:
        setTotal(13000 * bagCount);
    }
  }, [bagCount, regularity]);



 

  console.log(subscriptions);

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
          selected={regularity === "monthly"}
          onClick={() => handlePlanSelect("monthly")}
        >
          Once a Month
        </PlanButton>
        <PlanButton
          selected={regularity === "weekly"}
          onClick={() => handlePlanSelect("weekly")}
        >
          Once a Week
        </PlanButton>
        <PlanButton
          selected={regularity === "twiceWeekly"}
          onClick={() => handlePlanSelect("twiceWeekly")}
        >
          Twice a Week
        </PlanButton>
      </div>
      <Footer>
        <TotalDisplay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "1.5rem", marginTop: "1rem" }}
        >
          Total: {total} <sub>/ Month</sub>
        </TotalDisplay>

        <Button
          size="medium"
          color="primary"
          onClick={() => {
            ChoosePlan();
            toast.success("plan added successfully");
          }}
        >
          Choose Plan
        </Button>
      </Footer>
    </Container>
  );
};

export default LaundryCount;
