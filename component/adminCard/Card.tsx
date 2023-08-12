"use client";
import { FC } from "react";
import { Container, Img, ImgContainer, Title } from "./card.styles";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  image: string;
  value: string;
}

const Card: FC<CardProps> = ({ title, image, value }) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(value)}>
      <Title>{title}</Title>
      <ImgContainer>{value}</ImgContainer>
    </Container>
  );
};

export default Card;
