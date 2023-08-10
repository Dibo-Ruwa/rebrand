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

      <SectionText>
        Our mission is to create an efficient world where our valued customers
        can access top-quality services without any friction. We strive to
        redefine convenience, making it easier than ever to get things done so
        you can focus on the things that truly matter in your life. Whether you
        need a delicious meal from your favorite restaurant, your laundry
        handled with care, or your home sparkling clean, Dibo Ruwa is here to
        make it happen
      </SectionText>

      <SectionHeader>Commitment to Excellence</SectionHeader>

      <SectionSubHeader>
        Emphasizing Excellence as the Core Value
      </SectionSubHeader>

      <SectionText>
        At Dibo Ruwa, excellence is not just a buzzword; it&apos;s the guiding
        principle that shapes every aspect of our service. We hold ourselves to
        the highest standards, ensuring that each task is performed with
        meticulous attention to detail and precision. From the moment you place
        your order to the moment it&apos;s fulfilled, we are committed to
        delivering nothing short of excellence.
      </SectionText>

      <SectionSubHeader>
        Highly Trained and Dedicated Service Providers
      </SectionSubHeader>

      <SectionText>
        Our team of service providers is the heart and soul of Dibo Ruwa. We
        handpick and rigorously train each member to guarantee their expertise
        in their respective fields. Our dedicated professionals take pride in
        their work, and their passion for providing top-notch service shines
        through in every task they undertake
      </SectionText>

      <SectionSubHeader>
        Ensuring a Delightful and Hassle-Free Experience
      </SectionSubHeader>

      <SectionText>
        Your satisfaction is our ultimate goal. We go above and beyond to ensure
        that your experience with Dibo Ruwa is nothing short of delightful. With
        a focus on efficiency and attention to customer feedback, we
        continuously refine our services to meet and exceed your expectations.
        Experience the joy of seamless transactions and exceptional service, all
        at your fingertips.
      </SectionText>

      <SectionHeader>Unrivaled Convenience</SectionHeader>

      <SectionSubHeader>
        Seamless and Convenient Access to Services
      </SectionSubHeader>

      <SectionText>
        We understand that time is precious, and thats why we've designed our
        platform to be user-friendly and intuitive. With just a few clicks or
        taps, you can access a wide range of services and have them delivered
        right to your doorstep. Say goodbye to long queues and time-consuming
        errands, and embrace the convenience of Dibo Ruwa.
      </SectionText>

      <SectionSubHeader>
        Ordering Meals, Laundry, and Home Cleaning Made Easy
      </SectionSubHeader>
      <SectionText>
        Craving your favorite dish from that renowned restaurant? Need your
        laundry expertly cleaned and folded? Dreaming of returning to a
        spotless, organized home after a tiring day? Dibo Ruwa has got you
        covered! Simply select your desired service, customize your preferences,
        and leave the rest to us.
      </SectionText>

      <SectionSubHeader>
        User-Friendly Platform for Quick and Effortless Service Requests
      </SectionSubHeader>
      <SectionText>
        Our easy-to-use platform ensures that placing an order is a breeze.
        Navigate through our app or website effortlessly, track your orders in
        real-time, and receive updates at every step of the process. With Dibo
        Ruwa, accessing premium services has never been easier.
      </SectionText>

      <SectionHeader>Local Roots, Global Reach</SectionHeader>
      <SectionSubHeader>Proudly Based in Nigeria</SectionSubHeader>
      <SectionText>
        Dibo Ruwa is deeply rooted in the vibrant culture and spirit of Nigeria.
        We take immense pride in our local heritage and are dedicated to
        contributing positively to our community.
      </SectionText>

      <SectionSubHeader>
        Aspirations to Extend Services Beyond Borders
      </SectionSubHeader>
      <SectionText>
        While our roots are in Nigeria, our vision knows no bounds. We aspire to
        expand our services and bring the Dibo Ruwa experience to customers far
        beyond our borders. With a commitment to excellence, we aim to be a
        globally recognized service industry, known for efficiency, quality, and
        customer satisfaction.
      </SectionText>

      <SectionSubHeader>
        Becoming a Global Example of Efficiency and Customer-Centricity
      </SectionSubHeader>
      <SectionText>
        Our journey towards becoming a global example of efficiency and
        customer-centricity is fueled by our dedication to continuous
        improvement and innovation. We aim to set new standards in the service
        industry, inspiring others to follow suit and providing unparalleled
        experiences for customers around the world.
      </SectionText>

      <SectionHeader>Community and Sustainability</SectionHeader>
      <SectionSubHeader>Responsible Corporate Citizenship</SectionSubHeader>
      <SectionText>
        At Dibo Ruwa, we believe in giving back to the communities we serve. We
        actively support local initiatives and charities, working together to
        make a positive impact on society and the lives of those in need
      </SectionText>

      <SectionSubHeader>
        Supporting Local Initiatives and Charities
      </SectionSubHeader>
      <SectionText>
        We are proud to be involved in various community-driven initiatives that
        uplift the underprivileged and support the less fortunate. With a sense
        of responsibility and care, we strive to create a better and more
        equitable society.
      </SectionText>

      <SectionSubHeader>
        Commitment to Implementing Sustainable Practices
      </SectionSubHeader>
      <SectionText>
        Preserving the environment for future generations is a responsibility we
        take seriously. As part of our commitment to sustainability, we actively
        work towards implementing eco-friendly practices throughout our
        operations, reducing our carbon footprint, and promoting a greener,
        healthier planet
      </SectionText>
      <SectionHeader>Team</SectionHeader>
      <SectionSubHeader>
        Information about the Passionate and Dedicated Team
      </SectionSubHeader>
      <SectionText>
        Our team is our greatest asset. Made up of passionate individuals who
        share our vision, each member of the Dibo Ruwa team is committed to
        providing unparalleled service to our customers. We believe that our
        people are the driving force behind our success and the reason for the
        smiles on our clients' faces.
      </SectionText>
      <SectionSubHeader>
        Emphasizing the Training and Skills of Service Providers
      </SectionSubHeader>
      <SectionText>
        To ensure that our customers receive the best possible service, we
        invest heavily in the training and development of our service providers.
        Each team member undergoes rigorous training to hone their skills and
        expertise, making them capable of delivering the utmost professionalism
        and efficiency in their respective fields.
      </SectionText>
      <SectionHeader>Join Us</SectionHeader>
      <SectionSubHeader>
        Inviting Customers to Experience the Dibo Ruwa Difference
      </SectionSubHeader>
      <SectionText>
        Are you tired of juggling multiple tasks and errands? Do you dream of a
        life where convenience and efficiency reign supreme? Join us at Dibo
        Ruwa and experience a world of hassle-free living. Let us handle the
        chores while you focus on what truly matters to you
      </SectionText>

      <SectionSubHeader>
        Addressing the Needs of Busy Professionals and Individuals Seeking
        Convenience
      </SectionSubHeader>
      <SectionText>
        Whether you're a busy professional with a demanding schedule or an
        individual seeking convenience and luxury, Dibo Ruwa is here to cater to
        your needs. Our wide range of services is tailored to provide the
        ultimate convenience, allowing you to reclaim precious time and enjoy
        life to the fullest.
      </SectionText>
      <SectionSubHeader>
        Encouraging Potential Clients to Be a Part of the Journey Towards a More
        Efficient World
      </SectionSubHeader>
      <SectionText>
        Join us on this exciting journey towards creating a more efficient
        world. Your support and patronage empower us to push boundaries and
        innovate. Together, we can shape a future where convenience, excellence,
        and exceptional service become the norm.
      </SectionText>
      <SectionHeader>Conclusion</SectionHeader>
      <SectionSubHeader>
        Reiterating the Values of Efficiency, Convenience, and Excellence
      </SectionSubHeader>
      <SectionText>
        At Dibo Ruwa, we remain steadfast in our commitment to efficiency,
        convenience, and excellence. These core values underpin everything we
        do, driving us to provide you with the best possible service and
        experience.
      </SectionText>

      <SectionSubHeader>
        Expressing Gratitude for Choosing Dibo Ruwa for a Better Life
      </SectionSubHeader>

      <SectionText>
        We are sincerely grateful for your trust and choosing Dibo Ruwa as your
        service provider. Your satisfaction is our greatest reward, and we look
        forward to continuing to serve you with dedication and passion.
      </SectionText>

      <SectionText>
        Efficiency. Convenience. Excellence. Welcome to Dibo Ruwa - Your Gateway
        to Hassle-Free Living!
      </SectionText>
    </Container>
  );
};

export default AboutUs;
