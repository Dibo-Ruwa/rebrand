"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 3% 8%;
  width: 100%;
`;
export const Services = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 15vh 8% 0;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }
`;
export const EmptyServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5vh 0;

  .image {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: var(--primary-20);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }
`;
