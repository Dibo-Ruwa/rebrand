"use client";
import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  FaqAccordionList,
  FaqSection,
  FeedBackSection,
  ServiceList,
  ServicesSection,
  WhyChooseUsColored,
  WhyChooseUsContent,
  WhyChooseUsImage,
  WhyChooseUsImageContainer,
  WhyChooseUsSection,
  WhyChooseUsText,
  WhyChooseUsTitle,
  HeroList,
  HeroListItem,
  HeroImageContainer,
  HeroImage,
} from "./home.styles";
import Button from "@/component/ui/button/Button";
import { FiPhoneCall } from "react-icons/fi";
import { accordionData, services } from "@/constants";
import ServiceCard from "@/component/serviceCard/ServiceCard";
import { assets } from "@/public/assets";
import Accordion from "@/component/ui/accordion/Accordion";
import NewsletterForm from "@/component/NewsletterForm";
import { motion } from "framer-motion";
import FeedbackCarousel from "@/component/feedBacksCarousel/FeedBacks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AccordionList from "@/component/AccordionList/AccordionList";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Container>
      <HeroContainer bg="primary-20">
        <motion.div className="hero__text">
          <div className="title">
            Live easy. Free yourself from laundry, cleaning and cooking
          </div>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                <strong>Fresh clothes, always ready:</strong>
                <small>Fresh clothes, ready when you are.</small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />

              <div className="text">
                <strong>Sparkling clean homes:</strong>
                <small>
                  Step into a fresh, clean space every day, without lifting a
                  finger.
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                <strong>Tasty meals delivered:</strong>
                <small>
                  Fresh, delicious meals delivered to you - no effort required.
                </small>
              </div>
            </HeroListItem>
          </HeroList>

          <div className="btn_grp">
            <Button
              size="large"
              color="primary"
              onClick={() => router.push(session ? "/dashboard" : "/signin")}
            >
              Discover Easy Living
            </Button>
            <div className="contact">
              <button className="withIcon">
                <FiPhoneCall />
              </button>
              <div className="content">
                <span>Call us</span>
                <span className="cell">+2348059303261</span>
              </div>
            </div>
          </div>
        </motion.div>

        <HeroImageContainer>
          <div className="image home">
            <HeroImage src="/homepage_hero.png" fill={true} alt=".." />
          </div>
        </HeroImageContainer>
      </HeroContainer>

      <ServicesSection>
        <header>
          <h3 className="title">Our Services</h3>
          <p className="subtitle">
            Reliable convenience, always at your service.
          </p>
        </header>
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
          <div className="pattern">
            <Image
              src={assets.pattern1}
              width={300}
              height={300}
              alt="line_patterns"
            />
          </div>
        </ServiceList>
      </ServicesSection>

      <WhyChooseUsSection>
        <WhyChooseUsImageContainer>
          <WhyChooseUsImage>
            <div className="ball blueBall"></div>
            <div className="ball yellowBall"></div>
            <div className="ball purpleBall"></div>

            <div className="image">
              <Image src="/phone user.png" fill={true} alt="..." />
            </div>
          </WhyChooseUsImage>
        </WhyChooseUsImageContainer>

        <WhyChooseUsText>
          <WhyChooseUsColored>Why choose DiboRuwa?</WhyChooseUsColored>
          <WhyChooseUsTitle>
            Because we&#39;re here to do the hard work for you.
          </WhyChooseUsTitle>
          <WhyChooseUsContent>
            <li>
              <span className="dot"></span>
              <p>Your time is precious. You deserve to focus on what truly matters</p>
           </li>
           
            <li>
              <span className="dot"></span>
              <p>We make it simple to transform your daily routine.</p>
           </li>
            <li>
              <span className="dot"></span>
              <p>Sit back, relax, and let us take care of the rest.</p>
            </li>
            <li>
              <span className="dot"></span>
              <p>With our services, you can have a clean, organized home without the hassle.</p>
           </li>
          </WhyChooseUsContent>
          <Button
            size="large"
            color="primary"
            onClick={() => router.push(session ? "/dashboard" : "/signin")}
          >
            Get Started
          </Button>
        </WhyChooseUsText>
      </WhyChooseUsSection>

      {/* feedbacksection */}

      <FeedBackSection>
        <h3 className="title">
          What our Customers <br /> Say about us
        </h3>

        <div className="content">
          <div className="image">
            <Image src="/lady thinking.png" fill={true} alt="...." />
          </div>

          <div className="carousel">
            <FeedbackCarousel />
          </div>
        </div>
      </FeedBackSection>

      <FaqSection>
        <div className="container">
          <NewsletterForm />

          <AccordionList />
        </div>
      </FaqSection>
    </Container>
  );
}
