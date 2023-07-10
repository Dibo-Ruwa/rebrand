import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  FaqAccordionList,
  FaqSection,
  ServiceList,
  ServicesSection,
  WhyChooseUsColored,
  WhyChooseUsContent,
  WhyChooseUsImage,
  WhyChooseUsImageContainer,
  WhyChooseUsSection,
  WhyChooseUsText,
  WhyChooseUsTitle,
} from "./page.styles";
import Button from "@/component/ui/button/Button";
import { FiPhoneCall } from "react-icons/fi";
import { accordionData, services } from "@/constants";
import ServiceCard from "@/component/serviceCard/ServiceCard";
import Image from "next/image";
import { assets } from "@/public/assets";
import Accordion from "@/component/ui/accordion/Accordion";
import NewsletterForm from "@/component/NewsletterForm";

export default function Home() {
  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <div className="title">
            Break free from mundane tasks that drains your time and energy
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            animi quo totam, in voluptatem corporis esse illo quas ad repellat
            quisquam repellendus optio harum ea eligendi quae sapiente commodi.
            Tenetur?
          </p>

          <div className="btn_grp">
            <Button size="large" color="primary">
              Get Started
            </Button>
            <div className="contact">
              <button className="withIcon">
                <FiPhoneCall />
              </button>
              <div className="content">
                <span>Call us</span>
                <span className="cell">+2348148918529</span>
              </div>
            </div>
          </div>
        </div>

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
          <Button size="large" color="primary">
              Get Started
            </Button>
        </WhyChooseUsText>
      </WhyChooseUsSection>

      <FaqSection>
        <div className="container">
          <NewsletterForm/>
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
