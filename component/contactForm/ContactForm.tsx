import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 15px;
`;

const InputField = styled.input`
  background: var(--primary-20);
  border: none;
  outline: none;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 12px;
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  outline: none;
  padding: 15px 20px;
  cursor: pointer;
  width: max-content;
  border-radius: 12px;
`;

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField type="text" placeholder="Name" />
      <InputField type="email" placeholder="Email" />
      <InputField as="textarea" rows={4} placeholder="Message" />
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
