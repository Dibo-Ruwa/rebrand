"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 15vh 8% 5%;
  position: relative;
`;
export const BackBtn = styled.div``;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  margin: auto;
  position: relative;
  padding: 50px;
  border: 1px solid var(--primary-20);
  border-radius: 20px;
`;
export const FormControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const EditBtn = styled.button`
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary-20);
  color: white;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all 0.5s ease;

  &:hover {
    background: var(--primary);
  }
`;
