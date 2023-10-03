"use client";

import NotificationModal from "@/component/NotificationModal";
import Input from "@/component/ui/input/Input";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20vh 8%;
  min-height: 80vh;

  @media screen and(max-width: 768px) {
    height: 100vh;
  }
`;
export const Header = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }

  @media screen and(max-width: 768px) {
    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
`;
export const Form = styled.form`
  border: 1px solid var(--primary);
  padding: 20px;
  border-radius: 12px;
  display: grid;
  gap: 20px;
  max-width: 555px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputField = styled.div``;
export const Button = styled.input`
  outline: none;
  padding: 15px;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background: var(--primary-20);
  }
`;

const ResetPassword = ({ token }: { token: string | string[] | undefined }) => {
  const { resetPassword, showModal, modalErrorType, modalMessage, closeModal } =
    useAuth();
  const [email, setEmail] = useState("");

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    {
      email: email ? email : "",
      password: "",
      confirmPassword: "",
    },
    () => {}
  );

  console.log(errors);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password: formData.password,
    };
    resetPassword(data);
  };
  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await axios.get(
          `/api/auth/reset-password?token=${token}`
        );

        setEmail(response.data.email);
      } catch (error) {
        console.log(error);
      }

      // ...
    }
    fetchData();
  }, [token, setEmail, email]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Header>
          <h3> Password reset</h3>
          <p>please enter your registered email to reset yor password.</p>
        </Header>

        <InputField>
          <Input
            label="New Password"
            name="password"
            type="password"
            id="id1"
            value={formData.password}
            onChange={(e) => handleChange(e, e.target.name)}
            showPasswordToggle
          />
        </InputField>
        <InputField>
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="id2"
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e, e.target.name)}
            showPasswordToggle
          />
        </InputField>

        {/* <Button onClick={handleSubmit}>Submit</Button> */}
        <Button
          type="submit"
          value="Submit"
          disabled={formData.password !== formData.confirmPassword}
        />
      </Form>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default ResetPassword;
