"use client";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

const PriceCardContainer = styled.div`
  background-color: #fff;
  height: auto;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  z-index: 3;
  @media screen and (max-width: 768px) {
    max-width: 80%;
    margin: auto;
  }
`;

const PrimaryBackground = styled.div`
  background-color: var(--primary);
  height: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

const ContentContainer = styled.div`
  padding: 8%;
`;

const PriceTag = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color4);

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 130%;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CTAIcon = styled(RiArrowRightSLine)`
  margin-left: 0.5rem;
  font-size: 15px;
  display: none;
  transition: display 0.3s;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;

  /* background-color: var(--primary-20); */
  color: var(--color4);
  /* padding: 5px 10px; */
  font-size: 12px;
  text-decoration: none;
  border-radius: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #2563eb; */

    ${CTAIcon} {
      display: block;
    }
  }
`;

const CTAButtonWrapper = styled.div``;

const PriceCard = () => {
  return (
    <PriceCardContainer>
      <PrimaryBackground />
      <ContentContainer>
        <PriceTag>$30/bag</PriceTag>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          consequat neque. Donec ac velit vitae metus porttitor luctus.
        </Description>
        <CTAButton href="#">
          Schedule a pick up
          <CTAButtonWrapper>
            <CTAIcon />
          </CTAButtonWrapper>
        </CTAButton>
      </ContentContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
