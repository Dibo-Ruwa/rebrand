"use client";

import { planDetails } from "@/constants";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15vh 8% 5%;
`;
const Heading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  margin: auto;

  @media screen and (max-width: 768px){
          width: 100%;

  }
`;
const SubscriptionTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: var(--primary-20);
  width: 30%;
  padding: 10px;
  border-radius: 12px;
  margin: auto;
  
  @media screen and (max-width: 768px){
          width: 100%;
          
  }
`;

const SubTitle = styled.div`
  background: var(--primary-20);
  padding: 10px 15px;
  border-radius: 10px;
  /* width: 120px; */
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`;

const Title = styled.h3`
  font-size: 38px;
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px){
         font-size: 18px;
          
  }
`;
const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px){
         font-size: 14px;
          
  }
`;
const PlanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 60%;
  margin: 30px auto;

  
  @media screen and (max-width: 768px){
          width: 100%;
          flex-direction: column;
  }
`;
const PlanCard = styled.div`
  border: 3px solid var(--color2-20);
  padding: 20px;
  border-radius: 12px;
text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    color: var(--color2);
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 7px;
    margin: 20px;
  }

  button {
    padding: 10px 25px;
    border-radius: 12px;
    width: 100%;
    border: none;
    outline: none;
    background: var(--color2);
    color: #fff;
  }

  @media screen and (max-width: 768px){
        width: 100%
  }
`;

const subscriptions = ["Food", "Cleaning", "Laundry"];
const plans = ["Weekly", "Biweekly", "Monthly"];

const Pricing = () => {
  const [activeSubscription, setActiveSubscription] = useState(
    subscriptions[0]
  );

  const handleSubscriptionChange = (subscription: string) => {
    setActiveSubscription(subscription);
  };
  return (
    <Container>
      <Heading>
        <Title>Convenience and Quality on your Budget</Title>
        <Subtitle>
          Whatever plan you choose, our expert team is ready to lighten your
          load.
        </Subtitle>
        <Subtitle>What service(s) are you interested in?</Subtitle>
      </Heading>

      <SubscriptionTab>
        {subscriptions.map((sub, index) => (
          <SubTitle
            key={sub}
            style={
              sub === activeSubscription
                ? { background: "#fff" }
                : { background: "var(--primary-20)" }
            }
            onClick={() => handleSubscriptionChange(sub)}
          >
            {sub}
          </SubTitle>
        ))}
      </SubscriptionTab>

      <PlanContainer>
        {planDetails[activeSubscription].map((plan: any) => (
          <PlanCard key={plan.title}>
            <h3>{plan.title}</h3>
            <p>Total: {plan.total}</p>
            <ul>
              {plan.features.map((feature: string[], index: string) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </PlanCard>
        ))}
      </PlanContainer>
    </Container>
  );
};

export default Pricing;
