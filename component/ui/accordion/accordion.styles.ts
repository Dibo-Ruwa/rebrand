'use client'

import { motion } from "framer-motion";
import styled from "styled-components";

export const AccordionWrapper = styled(motion.div)`
  border-radius: 12px;
  background-color: var(--primary-20);
  height: auto;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AccordionButton = styled(motion.button)`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;

  text-align: left;
  outline: none;
  border: none;
  background: transparent;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    padding: 15px;
    font-size: 15px;
  }
`;

export const AccordionContent = styled(motion.div)`
  padding: 1rem;
  color: #22223b;
`;