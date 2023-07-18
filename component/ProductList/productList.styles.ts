"use client";

import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h3`
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5vh;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ProductListing = styled.ul`
margin-top: 30px;
display: flex;
gap: 20px;
flex-wrap: wrap;
list-style: none;
`;
