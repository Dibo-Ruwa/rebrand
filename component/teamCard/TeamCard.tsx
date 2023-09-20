'use client'
import React from 'react';
import styled from 'styled-components';

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const CardContainer = styled.div`

  padding: 16px;
  margin: auto;
  text-align: center;
  background-color: #fff;
  display: grid;
  gap: 10px;

  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const Image = styled.img`
    border-radius: 8px;
  max-width: 100%;
  border-radius: 50%;
`;

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={`${name}'s Photo`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </CardContainer>
  );
};

export default TeamCard;
