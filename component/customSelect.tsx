"use client";

import React, { useState } from "react";
import styled from "styled-components";

const CustomSelectContainer = styled.div`
  position: relative;
  width: 100%;

  label {
    display: block;
    color: #4b5563;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    /* min-width: 300px; */
  }
`;

const CustomSelectButton = styled.button`
  border: 1px solid var(--primary-20);
  outline: none;
  border-radius: 0.45rem;
  padding: 0.6rem;
  min-height: 35px;
 
  transition: all 0.3s ease;
  background: transparent;
  width: 100%;

  &:focus {
    border: 1px solid var(--primary);
  }
`;

const CustomOptionsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--primary-20);
  background: #fff;
  border-radius: 0.45rem;
`;

const CustomOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-20);
  }
`;

interface CustomSelectProps {
  label?: string;
  disabled?: boolean;
  options: string[] | undefined;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  disabled,
  options,
  value,
  name,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange({
      target: { value: option, name },
    } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  return (
    <CustomSelectContainer>
      <label>{label}</label>
      <CustomSelectButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {value}
      </CustomSelectButton>
      {isOpen && (
        <CustomOptionsList>
          {options &&
            options.map((option) => (
              <CustomOption
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </CustomOption>
            ))}
        </CustomOptionsList>
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelect;
