"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div``;
export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;
export const HeroListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 18px;
  .dot {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
  }
`;
export const HeroImageContainer = styled.div`
  .image {
    width: 500px;
    height: auto;
    margin: auto;
  }
`;
export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HWWSecetion = styled.div`
  padding: 5% 8%;

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
export const HWWList = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
 
`;
export const HWWCard = styled.div`
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  background: var(--primary-20);

  @media screen and (max-width: 768px) {
    width: 100%
  }

  .image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: var(--primary-20);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    line-height: 130%;
    color: #333;
  }
`;

export const MenuSection = styled.div`
  padding: 5% 8%;
`;

export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10vh;
`;
export const MenuContainer = styled.div``;
