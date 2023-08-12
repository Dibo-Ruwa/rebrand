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
      "Contact Dibo Ruwa and schedule a pickup for your dirty clothes and beddings. Specify your preferred date and time for the pickup. On the scheduled day, a representative from Dibo Ruwa will come to your location to collect your laundry.",
  },
  {
    image: assets.washingmachine,
    title: "Professional Laundry Service",
    content:
      "Dibo Ruwa's experienced partners will handle the cleaning process for your clothes. They will wash, dry-clean, and iron all the items using high-quality detergents and following proper cleaning techniques. They take care of your clothes to ensure they are properly cleaned and maintained.",
  },
  {
    image: assets.cleaningTowel,
    title: "Quality Check and Delivery",
    content:
      "After the laundry process is completed, Dibo Ruwa's team performs a thorough quality check. They inspect each item to ensure they are clean, intact, and perfectly laundered. Once the quality control is done, Dibo Ruwa will deliver your clean clothes back to you, aiming to complete the entire process within 48 hours.",
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
              We pick up your dirty laundry
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              We launder, iron, and QC
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              We deliver your clean clothes, within 48 hours.
            </HeroListItem>
          </HeroList>

          <Button size="large" color="primary">
            Get Started
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
