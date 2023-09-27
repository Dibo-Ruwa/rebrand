"use client";

import Input from "@/component/ui/input/Input";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import axios from "axios";
import { useEffect, useState } from "react";
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
export const Button = styled.button`
  outline: none;
  padding: 15px;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
`;

const ResetPassword = ({ token }: { token: string | string[] | undefined }) => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  const onSubmit = async (formData: { [key: string]: string }) => {
    console.log(formData);
    // try {
    //   resetPassword(formData);
    // } catch (error) {
    //   toast.error("An error occurred while updating the profile");
    //   // Handle the error or display an error message
    // }
  };
  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    {
      email,
      password: "",
      confirmPassword: "",
    },
    onSubmit
  );

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await axios.get(
          `/api/auth/reset-password?token=${token}`
        );

        setEmail(response.data.email);
        console.log(email);
      } catch (error) {
        console.log(error);
      }

      // ...
    }
    fetchData();
  }, [token, setEmail, email]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
          />
        </InputField>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
