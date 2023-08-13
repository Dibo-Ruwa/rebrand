"use client";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  width: 100%;
  max-width: 150px;
`;

export const CartOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-20);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;
`;
export const CartBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--primary);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 15px;
  background: var(--primary-20);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
          width: 100%;
  }

  &:hover {
    ${CartOverlay} {
      display: flex;
      opacity: 1;
    }
  }
`;
export const ProductImage = styled(Image)`
  /* width: 100%;
  height: 100%; */
`;

export const ProductInfo = styled.div`
  text-align: center;
`;
export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const ProductPrice = styled.div`
  font-weight: light;
  font-size: 12px;
  color: var(--primary);
`;
