"use client";
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
import MoreServices from "@/component/shared/MoreServices";
import { Wyg, subscriptionPlans } from "@/constants";
import { v4 as uuidv4 } from "uuid";
import useCartStore from "@/store/useCart.store";

const Cleaning = () => {
  const { addSubscription, subscriptions } = useCartStore();

  const ChoosePlan = (plan: string) => {
    const data = {
      type: "cleaning",
      plan,
    };

    addSubscription(data);
  };

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
          {Wyg.map((item, index) => (
            <div className="card" key={index}>
              <WhatYouGetCard icon={item.icon} description={item.description} />
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
                <ul className="features">
                  {plan?.features &&
                    plan?.features.map((feature, index) => (
                      <li key={index}>
                        <div className="dot" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <Button size="medium"
                color="primary" onClick={() => ChoosePlan(plan.title)}>
                  <span> {plan.cta.label}</span>

                 
                </Button>
              </SubscriptionCard>
            </div>
          ))}
          <SubscriptionCard>
            <div className="image"> .. </div>
            <h3 className="title">Moving </h3>
            <p> Contact us today to make it the easiest move of your life.</p>

            <Button size="medium" color="primary">
              Contact Us
            </Button>
          </SubscriptionCard>
        </SubscriptionList>
      </SubscriptionSection>

      <MoreServices />
    </Container>
  );
};

export default Cleaning;
