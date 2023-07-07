"use client";

import styled from "styled-components";
import Select from "./ui/select/Select";
import { FiSend } from "react-icons/fi";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;
const Heading = styled.h3`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10vh;

  @media screen and (max-width: 900px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
const Form = styled.form`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .grouped {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    gap: 15px;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 20px 15px;
  border-radius: 12px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
    font-size: 15px;
  }
  background: var(--primary-20);
`;
const SendBtn = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 10px;
  font-size: 30px;
  outline: none;
  border: none;
  background: var(--primary-20);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const NewsletterForm = () => {
  const handleSelectChange = (e: {
    target: { name: string; value: string };
  }) => {
    // Handle the change event here
    console.log(e.target.value);
  };
  return (
    <Container>
      <Heading>
        Got Questions ? <br />
        We’ve got answers.
      </Heading>
      <Form>
        <Input placeholder="Enter you email...." />
        <div className="grouped">
          <Select
            name="Location"
            value="option1"
            options={options}
            onChange={handleSelectChange}
          />
          <SendBtn>
            <FiSend />
          </SendBtn>
        </div>
      </Form>
    </Container>
  );
};

export default NewsletterForm;
