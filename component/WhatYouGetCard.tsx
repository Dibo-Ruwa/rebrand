"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface WhatYouGetCardProps {
  icon: string;
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  width: 250px;
  border-radius: 0.75rem;
 
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 15px;

  &:hover { 
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: var(--primary-20);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-20);
  border-radius: 0.5rem;
`;

const Title = styled.h3`
  font-size: 14px;
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 16px;
`;

const WhatYouGetCard: React.FC<WhatYouGetCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Image src={icon} alt={title} width={24} height={24} />
      </IconWrapper>
      <div className="content">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardWrapper>
  );
};

export default WhatYouGetCard;
