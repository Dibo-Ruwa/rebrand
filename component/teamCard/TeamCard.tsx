'use client'
import React from 'react';
import styled from 'styled-components';

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  /* Add your styling for the team card container here */
  border: 1px solid var(--color3-20);
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #fff;
  display: grid;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  /* Add styling for the team member's image here */
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
