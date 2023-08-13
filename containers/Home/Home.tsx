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
} from "./home.styles";
import Button from "@/component/ui/button/Button";
import { FiPhoneCall } from "react-icons/fi";
import { accordionData, services } from "@/constants";
import ServiceCard from "@/component/serviceCard/ServiceCard";
// import Image from "next/image";
import { assets } from "@/public/assets";
import Accordion from "@/component/ui/accordion/Accordion";
import NewsletterForm from "@/component/NewsletterForm";
import { motion } from "framer-motion";
import FeedbackCarousel from "@/component/feedBacksCarousel/FeedBacks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Container>
      <HeroContainer bg="primary-20" >
        <motion.div className="hero__text">
          <div className="title">
            Break free from mundane tasks that drains your time and energy
          </div>
          {/* <p className="subtitle">
            Experience premium services that seamlessly blend into your life. Whether it's a <span className="meal">meal</span>, a <span>clean home</span>, or <span>fresh clothes</span>  – we're here for you.
          </p> */}

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              <span className="tick">Tasty Meals Delivered:</span> Savor delicious dishes without the daily cooking hassle.
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <span className="tick">Fresh Clothes, Always Ready:</span>  Forget laundry day; always have your favorite outfits ready.
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <span className="tick">Sparkling Clean Homes:</span> Step into a fresh, clean space every day, without lifting a finger.
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

        <div className="hero__image"></div>
      </HeroContainer>

      <ServicesSection>
        <header>
          <h3 className="title">Services</h3>
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
          </WhyChooseUsImage>
        </WhyChooseUsImageContainer>

        <WhyChooseUsText>
          <WhyChooseUsColored>Why Choose us?</WhyChooseUsColored>
          <WhyChooseUsTitle>
            Your Happiness is Our <br /> First Priority
          </WhyChooseUsTitle>
          <WhyChooseUsContent>
            At Dibo Ruwa, we believe in making your life easier and more
            enjoyable. Say goodbye to the mundane tasks that consume your time
            and energy. We offer a range of services designed to transform your
            daily routine and let you focus on what truly matters.
          </WhyChooseUsContent>
          <Button size="large" color="primary" onClick={() => router.push(session ? "/dashboard" : "/signin")}>
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
            <Image src={assets.testimonial} alt="...." />
          </div>

          <div className="carousel">
            <FeedbackCarousel />
          </div>
        </div>
      </FeedBackSection>

      <FaqSection>
        <div className="container">
          <NewsletterForm />
          <FaqAccordionList>
            {accordionData.map((item, index) => (
              <div className="accordion" key={index}>
                <Accordion title={item.title} content={item.content} />
              </div>
            ))}
          </FaqAccordionList>
        </div>
      </FaqSection>
    </Container>
  );
}
