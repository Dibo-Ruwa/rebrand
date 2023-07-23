import { FaCheckCircle } from "react-icons/fa";
import {
  BulletList,
  BulletListItem,
  BulletListItemHeader,
  BulletListItemText,
  Container,
  Section,
  SectionHeader,
  SectionText,
} from "./aboutus.styles";
import { AbousUsContent } from "@/constants";
import { Fragment } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface AboutUsProps {
  section: {
    header: string;
    text: string;
    bulletList?: string[];
  };
}

const AboutUs = () => {
  return (
    <Container>
      <SectionHeader className="main">About Us</SectionHeader>

      {AbousUsContent.map((section, index) => (
        <Section key={index}>
          <SectionHeader>{section.header}</SectionHeader>
          <SectionText>{section.text}</SectionText>

          {section.bulletList && (
            <BulletList>
              {section.bulletList.map((item, itemIndex) => (
                <BulletListItem key={itemIndex}>
                  <BulletListItemHeader>
                    <CheckCircledIcon className="icon" /> <p>{item.header}</p>
                  </BulletListItemHeader>
                  <BulletListItemText>{item.text}</BulletListItemText>
                </BulletListItem>
              ))}
            </BulletList>
          )}
        </Section>
      ))}
    </Container>
  );
};

export default AboutUs;
