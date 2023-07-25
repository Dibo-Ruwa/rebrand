"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background: var(--primary-20);
  padding: 5%;
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

export const BagCountSection = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const BagCountTitle = styled.p`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CounterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const CounterButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--primary-20);
  color: white;
  border: none;
  border-radius: 10px;
  /* padding: 0.5rem 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: var(--primary);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0;
    width: 40px;
    height: 40px;
  }
`;

export const PlanButton = styled.button<{ selected: boolean }>`
  background-color: var(--primary-20);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    border-radius: 8px;
    padding: 10px;
  }

  &:hover {
    background-color: var(--primary);
  }
`;

export const Footer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
export const ChoosePlanBtn = styled(motion.button)`
  padding: 7px 16px;
`;
export const TotalDisplay = styled(motion.div)`
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
