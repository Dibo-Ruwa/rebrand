'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';

interface HowItWorksData {
  image: string;
  title: string;
  content: string;
}

interface HowItWorksCardProps {
  data: HowItWorksData;
}

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-20);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-20);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CardImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const CardTitle = styled.h3`
  font-size:22px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardContent = styled.p`
  color: #4b5563;
  line-height: 130%;
`;

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ data }) => {
  const { image, title, content } = data;

  return (
    <CardContainer
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <CardImage src={image} alt={title} />
      </ImageContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default HowItWorksCard;
