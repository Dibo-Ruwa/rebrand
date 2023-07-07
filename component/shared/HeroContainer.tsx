"use client";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface HeroProps {
  bg: string;
  children: ReactNode;
}

const Container = styled.div<{ background: string }>`
  width: 100%;
  background: ${({ background }) => `var(--${background})`};
  padding: 15vh 8% 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero__text {
    width: 50%;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    .title {
      font-size: 48px;
      font-weight: bold;
      @media screen and (max-width: 900px) {
        font-size: 28px;
      }
    }

    p {
      font-size: 20px;
      margin: 20px 0;
      @media screen and (max-width: 900px) {
        font-size: 16px;
        line-height: 150%;
      }
    }

    .btn_grp {
      display: flex;
      gap: 30px;

      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
      }

      .contact {
        display: flex;
        gap: 5px;
        align-items: center;
        .withIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          font-size: 20px;
          border: none;
          outline: none;
        }

        .content {
          display: grid;
          grid-gap: 5px;

          .cell {
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const HeroContainer: FC<HeroProps> = ({ children, bg }) => {
  return <Container background={bg}>{children}</Container>;
};

export default HeroContainer;
