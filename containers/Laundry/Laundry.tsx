"use client";
import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  HIWList,
  HIWSection,
  HIWTitle,
  HeroImage,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  PlansSection,
  PriceTagSection,
  Rectangle,
} from "./Laundry.styles";
import Button from "@/component/ui/button/Button";
import HowItWorksCard from "@/component/howitworksCard/HiwCard";
import PriceCard from "@/component/PriceTag";
import LaundryCount from "@/component/laundryCounter/LaundryCounter";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { assets } from "@/public/assets";
import MoreServices from "@/component/shared/MoreServices";
import Success from "@/component/modals/Success";
import { useModal } from "@/hooks/useModal";
import useCartStore from "@/store/useCart.store";

const howItWorksData = [
  {
    image: assets.snpImg,
    title: "Schedule and Pickup",
    content:
      "Choose a time slot that fits your schedule. Whether it's a one-time pickup or a weekly routine, we adjust to your needs.",
  },
  {
    image: assets.washingmachine,
    title: "Professional Laundry Service",
    content:
      "Our laundry experts treat each garment as their own. From stains to fabric care, we've got it all covered.",
  },
  {
    image: assets.cleaningTowel,
    title: "Quality Check and Delivery",
    content:
      "No long waits. Your clothes are returned fresh and clean, right on schedule.",
  },
];

const Laundry = () => {
  const { successModal } = useModal();
  const { openModal, message, messageType, toggleModal } = useCartStore();
  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <h3 className="title">
            Save your time <br /> Fresh laundry, in 48 hrs.
          </h3>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
               Schedule a Pickup - Choose a time, and we'll be there.
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Expert Cleaning - Your clothes are treated with care, ensuring a fresh and clean feel
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Swift Delivery - Freshly laundered clothes returned to your doorstep, ready to wear
            </HeroListItem>
          </HeroList>

          <Button size="large" color="primary">
            Order Now
          </Button>
        </div>

        <HeroImageContainer>
          <Rectangle />
          <HeroImage
            src={assets.laundry_basket}
            width={600}
            height={200}
            alt="...."
          />
        </HeroImageContainer>
      </HeroContainer>

      <HIWSection>
        <HIWTitle>How it works</HIWTitle>
        <HIWList>
          {howItWorksData.map((item, index) => (
            <div className="card" key={index}>
              <HowItWorksCard data={item} />
            </div>
          ))}
        </HIWList>
      </HIWSection>

      <PriceTagSection>
        <div className="box top"></div>
        <div className="box bottom"></div>

        <div className="price__text">
          <h3 className="title">
            Wash & <br /> Fold <span>Pricing</span>
          </h3>
          <HeroImage 
            src={assets.bag} 
            width={300}
            height={200}  
            alt="" />
        </div>
        <div className="pricecard__container">
          <PriceCard />
        </div>
      </PriceTagSection>

      <PlansSection>
        <div className="text__container">
          <div className="heading">
            <h3 className="title">Check out our Laundry plans</h3>
            <p>Each laundry bag accommodates a maximum of 30 clothing items,</p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="icon">
                <CheckCircledIcon />
              </div>
              We provide pickup and delivery services within a 48-hour
              timeframe.
            </div>
            <div className="benefit">
              <div className="icon">
                <CheckCircledIcon />
              </div>
              We offer a hassle-free replacement policy for any damaged items.
              No inquiries needed.
            </div>
            <div className="benefit">
              <span className="icon">
                <CheckCircledIcon />
              </span>
              You have the flexibility to pause your laundry plan at any time.
              Trust us, it&apos;s guaranteed!
            </div>
          </div>
        </div>

        <div className="calc">
          <LaundryCount />
        </div>
      </PlansSection>

      <MoreServices />

      {/* {openModal === true ? (
        <Success
          open={openModal}
          message={message}
          type={messageType}
          close={toggleModal}
        />
      ) : null} */}
    </Container>
  );
};

export default Laundry;
