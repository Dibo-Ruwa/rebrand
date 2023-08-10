import { FaCheckCircle } from "react-icons/fa";
import {
  BulletList,
  BulletListItem,
  BulletListItemHeader,
  BulletListItemText,
  Container,
  Section,
  SectionHeader,
  SectionSubHeader,
  SectionText,
} from "./aboutus.styles";

import { Fragment } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const AboutUs = () => {
  return (
    <Container>
      <SectionHeader className="main">About Us</SectionHeader>
      <SectionHeader>
        Welcome to Dibo Ruwa: Your Gateway to Hassle-Free Living
      </SectionHeader>
      <SectionText>
        At Dibo Ruwa, we envision a world where daily tasks are no longer
        burdensome, but rather a seamless and convenient experience. As a
        leading service industry in Nigeria, we have set our sights on
        transforming the way you live, by providing exceptional services for
        food delivery, laundry, and home cleaning. Say goodbye to the hassles
        and stresses of everyday chores, and embrace a lifestyle of ease and
        efficiency with Dibo Ruwa
      </SectionText>

      <SectionHeader>
      Our Vision: Creating an Efficient World for Customers
      </SectionHeader>

      <SectionText>Our mission is to create an efficient world where our valued customers can access top-quality services without any friction. We strive to redefine convenience, making it easier than ever to get things done so you can focus on the things that truly matter in your life. Whether you need a delicious meal from your favorite restaurant, your laundry handled with care, or your home sparkling clean, Dibo Ruwa is here to make it happen</SectionText>

      <SectionHeader>
      Commitment to Excellence
      </SectionHeader>

      <SectionSubHeader>
      Emphasizing Excellence as the Core Value
      </SectionSubHeader>

      <SectionText>At Dibo Ruwa, excellence is not just a buzzword; it&apos;s the guiding principle that shapes every aspect of our service. We hold ourselves to the highest standards, ensuring that each task is performed with meticulous attention to detail and precision. From the moment you place your order to the moment it&apos;s fulfilled, we are committed to delivering nothing short of excellence.</SectionText>

      <SectionSubHeader>
      Highly Trained and Dedicated Service Providers
      </SectionSubHeader>

     

    </Container>


  );
};

export default AboutUs;
