"use client";
import TeamCard from "@/component/teamCard/TeamCard";
import { teamMembers } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

// Define your styled components below

const Container = styled.div`
  /* padding: 8%; */
`;

const FirstSection = styled.div`
  background: var(--color2-20);
  padding: 8%;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 3%;
  justify-content: space-between;
  .text {
    flex: 1;
  }

  .title {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    line-height: 130%;
  }

  .image {
    flex: 1;
  }
`;

const SecondSection = styled.div`
  padding: 5% 8%;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
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
`;

const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 130%;
`;

const FourthSection = styled.div`
  /* Style for the 4th section */
  display: flex;
`;

const LeftColumn = styled.div`
  /* Style for the left column */
`;

const Background = styled.div`
  /* Style for the background with Join Us button */
`;

const RightColumn = styled.div`
  /* Style for the right column */
`;

const TeamMemberList = styled.div`
  /* Add your styling for the list of team members here */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const AboutUsPage: React.FC = () => {
  return (
    <Container>
      <FirstSection>
        <div className="text">
          <h3 className="title">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni
            officia voluptatibus sit ea placeat nesciunt quam cupiditate
            blanditiis sunt aspernatur, perspiciatis quisquam cum nobis hic
            veritatis, quia assumenda mollitia similique distinctio! Aspernatur
            vero eum in officiis harum minus, deleniti voluptatem fugit
            obcaecati consectetur autem. Laudantium error reprehenderit optio
            labore.
          </p>
        </div>

        <div className="image">
          {/* <Image src={} width={100} height={100} alt="...." /> */}
        </div>
      </FirstSection>
      <SecondSection>
        <SectionTitle>Our Team</SectionTitle>
        <ParagraphText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          inventore veniam hic dignissimos, assumenda fugiat provident tenetur!
          Magni fugit reprehenderit vero est voluptatibus, assumenda doloremque!
          Ab maxime iste dolore atque.
        </ParagraphText>
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
      </SecondSection>
      <ThirdSection>
        <SectionTitle>Who We Are</SectionTitle>
        <ParagraphText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, veniam
          eligendi pariatur aperiam dolorem aliquam dolores ex illo. Vitae
          voluptates fuga rerum ab doloribus enim ipsum laborum repellat quidem
          sint?
        </ParagraphText>
      </ThirdSection>
      <FourthSection>
        <LeftColumn>
          <Background></Background>
        </LeftColumn>
        <RightColumn>{/* Image for the 4th section */}</RightColumn>
      </FourthSection>
    </Container>
  );
};

export default AboutUsPage;
