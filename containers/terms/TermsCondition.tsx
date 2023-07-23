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
} from "./termscondition.styles";
import { AbousUsContent } from "@/constants";

import { CheckCircledIcon } from "@radix-ui/react-icons";

const PrivacyPolicy = () => {
  return (
    <Container>
      <SectionHeader className="main">Effective Date: [Date]</SectionHeader>
      <SectionText>
      Welcome to Dibo Ruwa&rsquo;s website. These Terms and Conditions govern your use of our website and the services provided by Dibo Ruwa. By accessing our website or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.

      </SectionText>

      {AbousUsContent.map((section, index) => (
        <Section key={index}>
          <SectionHeader>{section.header}</SectionHeader>
          {section.text && <SectionText>{section.text}</SectionText>}

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
      <SectionText>
        By using our website or services, you agree to the terms and conditions
        of this Privacy Policy. Your continued use of our website following the
        posting of any changes to this policy signifies your acceptance of those
        changes.
      </SectionText>
    </Container>
  );
};

export default PrivacyPolicy;
