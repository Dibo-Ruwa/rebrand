"use client";

import styled from "styled-components";
import Select from "./ui/select/Select";
import { FiSend } from "react-icons/fi";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactForm/ContactForm";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;
const Heading = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10vh;

  @media screen and (max-width: 900px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;



const NewsletterForm = () => {
  const handleSelectChange = (e: {
    target: { name: string; value: string };
  }) => {
    // Handle the change event here
    console.log(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Heading>
        Got Questions ? <br />
        We’ve got answers.
      </Heading>
      <ContactForm />
    </Container>
  );
};

export default NewsletterForm;
