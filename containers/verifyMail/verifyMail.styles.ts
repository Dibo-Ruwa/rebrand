"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  color: black;
  border: 1px solid red;
  text-align: center;
  border-radius: 16px;
`;
export const SuccessContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  color: black;
  border: 1px solid var(--primary-20);
  text-align: center;
  border-radius: 16px;
`;
