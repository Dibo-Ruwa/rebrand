"use client";
import { services } from "@/constants";
import ServiceCard from "../serviceCard/ServiceCard";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const Container = styled.div`
  padding: 8%;
`;
const Title = styled.h3`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const ServiceList = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const MoreServices = () => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Container>
      <Title>More of our services ?</Title>
      <ServiceList>
        {services.map((service) => (
          <div key={service.title}>
            <ServiceCard
              title={service.title}
              content={service.content}
              bg={service.bg}
              imageSrc={service.image}
              cta={service.cta}
              ctaTextColor={service.color}
            />
          </div>
        ))}
      </ServiceList>
    </Container>
  );
};

export default MoreServices;
