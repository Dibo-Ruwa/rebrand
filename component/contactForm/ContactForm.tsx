import useForm from "@/hooks/useForm";
import axios from "axios";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 15px;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  const { formData, handleChange, resetForm, errors } = useForm(
    {
      name: "",
      email: "",
      message: "",
    },
    () => {}
  );
  const onSubmit = async (e: FormEvent) => {
    try {
      const res = await axios.post("/api/contact", formData);
    } catch (error) {
      toast.error("An error occurred while updating the profile");
      // Handle the error or display an error message
    }
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputField
        type="text"
        placeholder="Name"
        name="name"
        id="id"
        value={formData.name}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <InputField
        type="email"
        placeholder="Email"
        name="email"
        id="id"
        value={formData.email}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <InputField
        as="textarea"
        rows={6
        }
        placeholder="Message"
        name="message"
        id="id"
        value={formData.message}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <SubmitButton type="submit" onClick={onSubmit}>Submit</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
