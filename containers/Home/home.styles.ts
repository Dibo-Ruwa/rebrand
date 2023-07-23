"use client";

import styled from "styled-components";

export const Container = styled.div``;
export const ServicesSection = styled.div`
  padding: 8%;

  header {
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
    .title {
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 20px;
      color: var(--content);
    }
  }
  @media (max-width: 900px) {
    header {
      width: 100%;
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 16px;
      }
    }
  }
`;

export const ServiceList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  height: auto;
  width: 100%;

  .pattern {
    position: absolute;
    right: 0;
    bottom: -10%;
    z-index: 2;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const WhyChooseUsSection = styled.div`
  padding: 5% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    gap: 30px;
  }
`;
export const WhyChooseUsImageContainer = styled.div`
  flex: 1;
`;
export const WhyChooseUsImage = styled.div`
  width: 350px;
  height: 350px;
  margin: auto;
  border-radius: 50%;
  background: var(--primary-20);
  position: relative;
  margin-bottom: 30px;

  .ball {
    position: absolute;
  }

  .blueBall {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color4);
    top: 60px;
    left: 15px;
  }
  .yellowBall {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color2);
    top: 20px;
    right: 20%;
  }
  .purpleBall {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color3);
    bottom: 20px;
    right: 12%;
  }
`;
export const WhyChooseUsText = styled.div`
  flex: 1;
`;
export const WhyChooseUsColored = styled.h3`
  font-size: 38px;

  color: var(--primary);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
export const WhyChooseUsTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;
export const WhyChooseUsContent = styled.p`
  font-size: 20px;
  line-height: 130%;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const FeedBackSection = styled.div`
  padding: 5% 8%;
  .title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10vh;
    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .image {
      flex: 1;

      img {
        width: 90%;
        height: 100%;
        @media screen and (max-width: 900px) {
        width: 100%;
      }
      }
    }

    .carousel {
      flex: 1;

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const FaqSection = styled.div`
  padding: 5% 8%;

  .container {
    width: 100%;
    height: auto;
    background: var(--primary-20);
    border-radius: 40px;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
      border-radius: 12px;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
    }
  }
`;
export const FaqAccordionList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  gap: 15px;
`;