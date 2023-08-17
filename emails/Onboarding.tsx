'use client'
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Message = styled.p`
  color: #666;
  line-height: 1.5;
`;

const Signature = styled.p`
  font-style: italic;
  color: #999;
`;

interface Props {
  customerName: string;
}

const OnboardingTemplate: React.FC<Props> = ({ customerName }) => {
  return (
    <Wrapper>
      <Title>Welcome to the Dibo Ruwa Family!</Title>
      <Message>
        Hello {customerName},
        <br />
        You&#39;ve made a fantastic decision! Welcome to the Dibo Ruwa family, where convenience meets quality.
        Whether you&#39;re here for our mouth-watering meals, impeccable cleaning, or our premium laundry services,
        we promise to deliver the best.
      </Message>
      <Message>
        A big thank you for joining us! If you have any questions or need assistance, our team is here to help.
      </Message>
      <Message>
        Cheers to an easier life with Dibo Ruwa!
      </Message>
      <Signature>
        Warm Regards, <br />
        The Dibo Ruwa Team
      </Signature>
    </Wrapper>
  );
};

export default OnboardingTemplate;
