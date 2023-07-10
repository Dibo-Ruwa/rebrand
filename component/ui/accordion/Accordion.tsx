"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";

const AccordionWrapper = styled(motion.div)`
  border-radius: 12px;
  background-color: var(--primary-20);
  height: auto;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AccordionButton = styled(motion.button)`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;

  text-align: center;
  outline: none;
  border: none;
  background: transparent;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    padding: 15px;
    font-size: 15px;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 1rem;
  color: #22223b;
`;

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
    <AnimatePresence  initial={false}>
      <AccordionWrapper
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          collapsed: { opacity: 1, height: "auto" },
        }}
        exit="collapsed"
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.93] }}
      >
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
