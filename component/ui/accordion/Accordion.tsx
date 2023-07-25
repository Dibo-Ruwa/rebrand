"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import {
  AccordionButton,
  AccordionContent,
  AccordionWrapper,
} from "./accordion.styles";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence initial={false}>
      <AccordionWrapper>
        <AccordionButton onClick={toggleAccordion}>
          <span>{title}</span>
          {isOpen ? <MinusCircledIcon /> : <PlusCircledIcon />}
        </AccordionButton>
        <AnimatePresence initial={false}>
          {isOpen && (
            <AccordionContent
              initial="collapsed"
              animate="open"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              exit="collapsed"
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.93] }}
            >
              <p>{content}</p>
            </AccordionContent>
          )}
        </AnimatePresence>
      </AccordionWrapper>
    </AnimatePresence>
  );
};

export default Accordion;
