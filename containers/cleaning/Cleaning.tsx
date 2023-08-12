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
import MoreServices from "@/component/shared/MoreServices";
import { Wyg, subscriptionPlans } from "@/constants";
import useCartStore from "@/store/useCart.store";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cleaning = () => {
  const { addSubscription, subscriptions } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const ChoosePlan = (plan: string) => {
    const data = {
      type: "cleaning",
      plan,
      total: 5000,
    };

    addSubscription(data);
  };

  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <h3 className="title">
            Home Cleaning, Tailored to Perfection with Diboruwa
          </h3>
          
            <HeroList>
              <HeroListItem>
                <span className="dot" />
                Book Online - Choose your service and preferred time slot with a few clicks.
              </HeroListItem>
              <HeroListItem>
                <span className="dot" />
                Expert Clean - Our team brings the shine, making sure every corner sparkles.
              </HeroListItem>
              <HeroListItem>
                <span className="dot" />
                Enjoy Your Space - Step into a home that feels fresh, without any of the work.
              </HeroListItem>
            </HeroList>
            <Button size="large" color="primary">
              Schedule a Clean
            </Button>
        </div>

        <HeroImageContainer>
          <HeroImage>
            <Image
              src={assets.cleaningImg}
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
                <Button
                  size="medium"
                  color="primary"
                  onClick={() => {
                    if (session) {
                      ChoosePlan(plan.title);
                    } else {
                      router.push("signin");
                      toast("please sign in to add item to cart");
                    }
                  }}
                >
                  <span> {plan.cta.label}</span>
                </Button>
              </SubscriptionCard>
            </div>
          ))}
          <SubscriptionCard>
            <div className="image"> .. </div>
            <h3 className="title">Simplifying Your Move from Start to Finish</h3>
            <p>Diboruwa isn't just about cleaning; we assist you in every step of your relocation. From ensuring your space is spotless to safely transporting your belongings, we're here to make the transition as smooth as possible.</p>
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
