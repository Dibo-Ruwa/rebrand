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
  // Rectangle,
} from "./Laundry.styles";
import Button from "@/component/ui/button/Button";
import HowItWorksCard from "@/component/howitworksCard/HiwCard";
import PriceCard from "@/component/PriceTag";
import LaundryCount from "@/component/laundryCounter/LaundryCounter";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { assets } from "@/public/assets";
import MoreServices from "@/component/shared/MoreServices";
import Success from "@/component/modals/Modal";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";

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


const laundryItems = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 5,
    amount: 0,
  },
  {
    id: 2,
    name: 'Jeans',
    price: 10,
    amount: 0,
  },
  // Add more laundry items as needed
];

const Laundry = () => {
  const { modal, closeModal } = useCartStore();

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
              <div className="text">
                <strong> Schedule a Pickup</strong>
                <small> Choose a time, and we&apos;ll be there.</small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                <strong>Expert Cleaning </strong>
                <small>
                  {" "}
                  Your clothes are treated with care, ensuring a fresh and clean
                  feel
                </small>
              </div>
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              <div className="text">
                <strong>Swift Delivery</strong>
                <small>
                  Freshly laundered clothes returned to your doorstep, ready to
                  wear
                </small>
              </div>
            </HeroListItem>
          </HeroList>

          <div className="ctaBtn">
            <Button size="large" color="primary">
              Order Now
            </Button>
          </div>
        </div>

        <HeroImageContainer>
          {/* <Rectangle /> */}
          <HeroImage
            src='/laundry to.png'
            fill={true}
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
          <div className="imageContainer">
             <HeroImage src='/the bag.png' fill={true} alt="" />
          </div>
         
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
        <LaundryCount  />
        </div>
      </PlansSection>

      <MoreServices />

      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
    </Container>
  );
};

export default Laundry;
