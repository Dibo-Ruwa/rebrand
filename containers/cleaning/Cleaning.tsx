import HeroContainer from "@/component/shared/HeroContainer";
import {
  BenefitList,
  Container,
  HeroImage,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  SubscriptionCard,
  SubscriptionList,
  SubscriptionSection,
  WYGSection,
} from "./Cleaning.styles";
import Button from "@/component/ui/button/Button";
import Image from "next/image";
import { assets } from "@/public/assets";
import WhatYouGetCard from "@/component/WhatYouGetCard";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const items = [
  {
    icon: assets.peopleIcon,
    description: "highly experienced cleaning team",
  },
  {
    icon: assets.sprayIcon,
    description: "All equipment and chemicals provided",
  },
  {
    icon: assets.shieldIcon,
    description: "Insured services against damage.",
  },
  {
    icon: assets.messageIcon,
    description: "Unlimited, responsive customer service",
  },
];

const subscriptionPlans = [
  {
    image: "/path/to/standart-image.png",
    title: "Standard Plan",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/standard",
    },
  },
  {
    image: "/path/to/deep-image.png",
    title: "Deep Plan",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/deep",
    },
  },
  {
    image: "/path/to/moving-image.png",
    title: "Moving Plan",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/moving",
    },
  },
];

const Cleaning = () => {
  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <h3 className="title">
            Invest your energy in Nurturing your loved ones
          </h3>
          <p>Our dedicated team of skilled caregivers:</p>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              Provide compassionate care, support, and assistance
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Are meticulously screened to ensure your familys well-being️
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Relieve you of strenuous responsibilities, giving you quality time
            </HeroListItem>
          </HeroList>
          <Button size="large" color="primary">
            Book Now
          </Button>
        </div>

        <HeroImageContainer>
          <HeroImage>
            <Image
              src={assets.cleaningImg}
              //     width={100}
              //     height={100}
              style={{ objectFit: "contain" }}
              alt="..."
            />
          </HeroImage>
        </HeroImageContainer>
      </HeroContainer>

      <WYGSection>
        <div className="text_container">
          <div className="heading">
            <h3 className="title">What you get</h3>
          </div>

          <p>
            We provide online booking, lightening fast customer service,
            fantastic organic cleaning using only eco sustainable quality
            cleaning product, pricing that beat competitors and a 200% guarantee
            every time
          </p>
        </div>

        <BenefitList>
          {items.map((item, index) => (
            <div className="card" key={index}>
              <WhatYouGetCard
                icon={item.icon}
                description={item.description}
              />
            </div>
          ))}
        </BenefitList>
      </WYGSection>

      <SubscriptionSection>
        <SubscriptionList>
          {subscriptionPlans.map((plan, index) => (
            <div className="card" key={index}>
              <SubscriptionCard>
                <div className="image"> {plan.image} </div>
                <h3 className="title">{plan.title} </h3>
                <p> {plan.content}</p>
                <Link href={plan.cta.path} className="cta">
                  <span> {plan.cta.label}</span>

                  <span className="icon">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </SubscriptionCard>
            </div>
          ))}
        </SubscriptionList>
      </SubscriptionSection>
    </Container>
  );
};

export default Cleaning;
