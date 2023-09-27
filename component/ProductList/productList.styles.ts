"use client";

import styled from "styled-components";

export const Container = styled.div`
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin: 30px auto;
  }
`;
export const Title = styled.h3`
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5vh;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ProductListing = styled.div`
  margin-top: 30px;
 width: inherit;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
