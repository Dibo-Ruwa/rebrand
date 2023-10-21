"use client";
import TeamCard from "@/component/teamCard/TeamCard";
import { teamMembers } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaHammer, FaHandshake, FaHeart } from "react-icons/fa";
import styled from "styled-components";

// Define your styled components below

const Container = styled.div``;

const FirstSection = styled.div`
  background: var(--color2-20);
  padding: 8%;
  padding-top: 20vh;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 3%;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  .text {
    flex: 1;
  }

  .title {
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    line-height: 130%;
    text-align: justify;
  }

  .image {
    flex: 1;
    width: 300px;
    height: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    img {
      width: 100%;
      height: 100%;
      margin: auto;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SecondSection = styled.div`
  padding: 5% 8%;
  text-align: center;

  .desc {
    width: 85%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .desc {
      width: 100%;
      margin: auto;
    }
  }
`;
const ThreeColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px; /* Adjust the gap as needed */
  margin: 30px;

  @media screen and (max-width: 698px) {
    grid-template-columns: 1fr;
  }
`;
const Column = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
  border-radius: 6px;
  display: grid;
  gap: 10px;
  transition: all 0.3s ease-in-out;

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color2-20);
    border-radius: 6px;
    font-size: 24px;
   color: var(--color2);
  }

  p {
    font-size: 14px;
  }

  &:hover {
    background: var(--color2-20);
  }
`;
const ColumnTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;

  .colored {
    .primary {
      color: var(--primary);
    }
    .color2 {
      color: var(--color2);
    }
    .color3 {
      color: var(--color3);
    }
    .color4 {
      color: var(--color4);
    }
  }
`;
const SectionSubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  .colored {
    .primary {
      color: var(--primary);
    }
    .color2 {
      color: var(--color2);
    }
    .color3 {
      color: var(--color3);
    }
    .color4 {
      color: var(--color4);
    }
  }
`;

const ThirdSection = styled.div`
  text-align: center;
  padding: 5% 8%;

  .header {
    width: 80%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .header {
      width: 100%;
      margin: auto;
    }
  }
`;

const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 130%;
`;

const FourthSection = styled.div`
  padding: 5% 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  /* Style for the left column */
  width: 40%;
  button {
    padding: 10px 25px;
    background: var(--primary);
    color: #fff;
    outline: none;
    border: none;
    border-radius: 50px;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Background = styled.div`
  /* Style for the background with Join Us button */
`;

const RightColumn = styled.div`
  width: 500px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
  }
`;

const TeamMemberList = styled.div`
  /* Add your styling for the list of team members here */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const AboutUsPage: React.FC = () => {
  return (
    <Container>
      <FirstSection>
        <div className="text">
          <h3 className="title">About Us</h3>
          <p>
            In a world that’s constantly moving, everyone seeks a touch of
            convenience. At Dibo Ruwa, we believe in making lives easier by
            providing services that let you focus on what truly matters. From
            pristine laundry to spotless homes and delectable meals delivered
            right to your door, we&#39;re not just another service provider —
            we&#39;re your everyday companion.
          </p>
        </div>

        <div className="image">
          <Image src="/homepage_hero.png" fill={true} alt="...." />
        </div>
      </FirstSection>
      <SecondSection>
        <SectionTitle>Who We Are</SectionTitle>
        <ParagraphText className="desc">
        We believe in making life easier, one service at a time. At Dibo Ruwa, we offer a range of convenient services that take care of the small details so you can focus on what truly matters. From dry cleaning and laundry to home delivery, we&#39;re here to make your life simpler and more enjoyable. Let us help you reclaim your time and energy. Discover how we can make your life easier today.
        </ParagraphText>

        <ThreeColumnSection>
          <Column>
            <div className="icon">
              <FaHammer />
            </div>
            <ColumnTitle>Excellence</ColumnTitle>
            <ParagraphText>
            We take pride in providing services of the highest quality.
            </ParagraphText>
          </Column>

          <Column>
            <div className="icon">
              <FaHandshake />
            </div>
            <ColumnTitle> Punctuality</ColumnTitle>
            <ParagraphText>
            We respect your time and deliver on our promises without delay.
            </ParagraphText>
          </Column>

          <Column>
            <div className="icon">
              <FaHeart />
            </div>
            <ColumnTitle>Sustainability</ColumnTitle>
            <ParagraphText>
            We are committed to reducing our environmental impact and creating a more sustainable future.
            </ParagraphText>
          </Column>
        </ThreeColumnSection>

        <ParagraphText style={{ fontStyle: "italic", fontSize: "14px" }}>
          In entrusting us with your laundry, cleaning, and food delivery needs,
          you&#39;re choosing a partner that values excellence, efficiency, and
          environmental responsibility.
        </ParagraphText>
      </SecondSection>
      <ThirdSection>
        <div className="header">
          <SectionTitle>Our Team</SectionTitle>
          <SectionSubTitle>The Pillars of Excellence.</SectionSubTitle>
          <ParagraphText>
            Behind every wrinkle-free shirt, every gleaming floor, and every
            satisfied bite, is a team that&#39;s passionate about delivering the
            best. Meet the stalwarts who&#39;ve made Dibo Ruwa synonymous with
            trust and quality.
          </ParagraphText>
        </div>

        <TeamMemberList>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamMemberList>
      </ThirdSection>
      <FourthSection>
        <LeftColumn>
          <SectionTitle>Join Us</SectionTitle>
          <ParagraphText>
          Are you passionate about making a difference? We&#39;re looking for people who share our values of compassion, responsibility, and growth. At Dibo Ruwa, we strive to make a positive impact on the world through our commitment to sustainability and our dedication to our employees&#39; development. If you&#39;re ready to join a team that&#39;s passionate about making life easier, simpler, and more fulfilling, we&#39;d love to hear from you
          </ParagraphText>
          <Background></Background>

          <button>Apply Now</button>
        </LeftColumn>
        <RightColumn>
          <Image src="/join hands.png" fill={true} alt="joining hands " />
        </RightColumn>
      </FourthSection>
    </Container>
  );
};

export default AboutUsPage;
