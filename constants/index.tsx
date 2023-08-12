import { assets } from "@/public/assets";

// Base URL
const baseURL: string = "https://example.com";

// Route configuration
export interface Route {
  category: string;
  name: string;
  icon: string;
  paths: {
    name: string;
    path: string;
    icon?: string;
    subroutes?: {
      name: string;
      path: string;
      icon: string;
    }[];
  }[];
}

export const routes: Route[] = [
  {
    category: "food",
    name: "Food",
    icon: "🍔",
    paths: [
      {
        name: "Services",
        path: "/services",
        icon: "🛠️",
        subroutes: [
          { name: "Laundry", path: "/laundry", icon: assets.soap },
          { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
          { name: "Food", path: "/food", icon: assets.food },
        ],
      },

      {
        name: "pricing",
        path: "/pricing",
      },
    ],
  },
  {
    category: "laundry",
    name: "Laundry",
    icon: "🧺",
    paths: [
      {
        name: "Services",
        path: "/services",
        icon: "🛠️",
        subroutes: [
          { name: "Laundry", path: "/laundry", icon: assets.soap },
          { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
          { name: "Food", path: "/food", icon: assets.food },
        ],
      },
      {
        name: "pricing",
        path: "/pricing",
      },
    ],
  },

  {
    category: "cleaning",
    name: "Cleaning",
    icon: "🧹",
    paths: [
      {
        name: "Services",
        path: "/services",
        icon: "🛠️",
        subroutes: [
          { name: "Laundry", path: "/laundry", icon: assets.soap },
          { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
          { name: "Food", path: "/food", icon: assets.food },
        ],
      },
      {
        name: "pricing",
        path: "/pricing",
      },
    ],
  },
  {
    category: "main",
    name: "Main",
    icon: "🏠",
    paths: [
      {
        name: "Services",
        path: "/services",
        icon: "🛠️",
        subroutes: [
          { name: "Laundry", path: "/laundry", icon: assets.soap },
          { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
          { name: "Food", path: "/food", icon: assets.food },
        ],
      },
      {
        name: "pricing",
        path: "/pricing",
      },
    ],
  },
];

export const generateLinksByCategory = (category: string) => {
  const route: Route | undefined = routes.find(
    (route) => route.category === category
  );

  if (route) {
    const links = route.paths.map((path) => path);

    return links;
  } else {
    return [];
  }
};

export const HWW = [
  {
    image: "h",
    title: "Choose your plan",
    content:
      "Choose a meal schedule that works for you; when you want it, how you want it. It takes less than 5 minutes.",
  },
  {
    image: "h",
    title: "We Cook and Deliver",
    content:
      "We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.",
  },
  {
    image: "h",
    title: "You Heat and Eat",
    content:
      "With Just 5 Minutes of Heating, Your Meal Is Good to Go, or Refrigerate It for a Later Tasty Treat",
  },
];

export const services = [
  {
    title: "Home Cleaning",
    category: "cleaning",
    image: assets.broom,
    color: "primary",
    bg: "primary-20",
    content:
      "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
    cta: {
      label: "Order Now",
      path: "/cleaning",
    },
  },
  {
    title: "Laundry",
    category: "laundry",
    image: assets.soap,
    color: "color2",
    bg: "color2-20",
    content:
      "Swift and fresh Your laundry, impeccably handled within 48 hours or less.",
    cta: {
      label: "Order Now",
      path: "/laundry",
    },
  },
  {
    title: "Food",
    category: "food",
    image: assets.food,
    color: "color3",
    bg: "color3-20",
    content:
      "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
    cta: {
      label: "Order Now",
      path: "/food",
    },
  },
  {
    title: "Training",
    category: "training",
    image: assets.chefHat,
    color: "color4",
    bg: "color4-20",
    content:
      "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
    cta: {
      label: "Order Now",
      path: "/trainning",
    },
  },
];

export const accordionData = [
  {
    title: "Accordion Item 1",
    content: "Content for Accordion Item 1",
  },
  {
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
  },
  {
    title: "Accordion Item 3",
    content: "Content for Accordion Item 3",
  },
];

// Array of sublinks
export const sublinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/aboutus" },
      { name: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Food", path: "/food" },
      { name: "Laundry", path: "/laundry" },
      { name: "Cleaning", path: "/cleaning" },
    ],
  },
  {
    title: "Other",
    links: [
      // { name: "Blog", path: "/comingsoon" },
      // { name: "Contact Us", path: "/comingsoon" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terma & Condition", path: "/terms" },
    ],
  },
];

export const Wyg = [
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

export const subscriptionPlans = [
  {
    image: "/path/to/standart-image.png",
    title: "Standard Plan",
    content:
      "Impress your guest and experience the joys of living in a clean home.",
    features: [
      "1 Bedrooms",
      "1 Living Rooms/ Dining Areas",
      "1 toilet/bathrooms",
      "1 kitchen",
      "1 Study/Store",
      "1 Outdoor/Balcony",
    ],
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/standard",
    },
  },
  {
    image: "/path/to/deep-image.png",
    title: "Deep Plan",
    content: "Get a top-to-bottom clean for your whole home.",
    features: [
      "3 Bedrooms",
      "2 Living Rooms/ Dining Areas",
      "3 toilet/bathrooms",
      "2 kitchen",
      "2 Study/Store",
      "2 Outdoor/Balcony",
    ],
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/deep",
    },
  },
];

export const DashboradServices = [
  {
    title: "Order Food",
    image: assets.food,
    url: "/food",
  },
  {
    title: "Schedule Cleaning",
    image: assets.broom,
    url: "/cleaning",
  },
  {
    title: "Laundry Pickup",
    image: assets.soap,
    url: "/laundry",
  },
  // {
  //   title: "Order History",
  //   image: assets.food,
  //   url: "/",
  // },
];

export const AboutUsContent = {
  introduction: {
    heading: "",
    content: "",
  },
};

export const PrivacyContent = [
  {
    header: "Information We Collect",
    text: "",
    bulletList: [
      {
        header: "Personal Information",
        text: "When you access our website or use our services, we may collect personal information that you provide voluntarily. This information may include, but is not limited to, your name, email address, phone number, and residential address",
      },
      {
        header: "Usage Data",
        text: " We may also automatically collect certain information when you interact with our website, such as your IP address, device information, browser type, and pages visited. This data is collected using cookies and similar tracking technologies and helps us enhance your browsing experience and improve our services",
      },
    ],
  },
  {
    header: "How We Use Your Information",
    bulletList: [
      {
        header: "Service Provision",
        text: "We use your personal information to fulfill your service requests, process transactions, and provide you with the services you have requested from Dibo Ruwa. ",
      },
      {
        header: "Communication",
        text: "We may use your contact information to communicate with you regarding your service orders, updates, promotions, and other relevant information related to Dibo Ruwa.",
      },
      {
        header: "Improving Our Services",
        text: "Your usage data and feedback may be used to analyze and improve our website and services, ensuring a more user-friendly and efficient experience for you.",
      },
    ],
  },
  {
    header: "Disclosure of Your Information",
    text: "",
    bulletList: [
      {
        header: "Service Providers",
        text: "We may share your personal information with trusted third-party service providers who assist us in delivering our services. These service providers are required to keep your information confidential and are prohibited from using it for any other purposes. ",
      },
      {
        header: "Legal Compliance",
        text: "We may disclose your personal information when required by law, such as in response to a valid court order or government request.",
      },
    ],
  },
  {
    header: "Data Security",
    text: " We take appropriate measures to safeguard your personal information and protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security protocols and technologies to maintain the security of your data.",
  },
  {
    header: ". Your Choices and Rights",

    bulletList: [
      {
        header: "Access and Update",
        text: "You have the right to access, update, or correct your personal information stored with us. If you wish to do so, please contact us at info@diboruwa.com ",
      },
      {
        header: "Marketing Communication",
        text: "If you no longer wish to receive marketing communications from us, you can opt-out by following the unsubscribe instructions provided in our emails or by contacting us directly",
      },
    ],
  },
  {
    header: "Children's Privacy",
    text: "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information to us, please contact us, and we will take appropriate steps to remove the information from our records",
  },
  {
    header: "Changes to this Privacy Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [email address].",
  },
];
export const TermsContent = [
  {
    header: "Use of the Website",

    bulletList: [
      {
        header: "License",
        text: "Dibo Ruwa grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for personal and non-commercial purposes.",
      },
      {
        header: "Prohibited Conduct",
        text: " You agree not to use our website in a manner that violates any applicable laws, infringes on the rights of others, or interferes with the proper functioning of the website. Prohibited conduct includes but is not limited to unauthorized access, transmitting harmful code, and engaging in any activity that may disrupt or impede our services.",
      },
    ],
  },
  {
    header: "Intellectual Property",
    bulletList: [
      {
        header: "Ownership",
        text: "All content, trademarks, logos, and intellectual property displayed on our website are the sole property of Dibo Ruwa or its licensors and are protected by copyright and other intellectual property laws ",
      },
      {
        header: "Use of Content",
        text: "You may not copy, reproduce, modify, distribute, or otherwise use any content from our website without obtaining prior written consent from Dibo Ruwa",
      },
    ],
  },
  {
    header: "Service Orders and Payments    ",

    bulletList: [
      {
        header: "Service Providers",
        text: "By placing an order for our services, you agree to pay the specified fees for the selected services. All service orders are subject to availability and acceptance by Dibo Ruwa. ",
      },
      {
        header: "Payment",
        text: "You must provide accurate and complete payment information when placing service orders. Payment can be made through the accepted payment methods on our website.",
      },
    ],
  },
  {
    header: "Disclaimer of Warranties",

    bulletList: [
      {
        header: "",
        text: 'Our website and services are provided on an "as is" and "as available" basis. Dibo Ruwa makes no warranties or representations of any kind, whether express or implied, regarding the accuracy, reliability, or suitability of our website or services for your specific needs.',
      },
      {
        header: "",
        text: "Dibo Ruwa does not guarantee that our website will be error-free, uninterrupted, or free from harmful code. We disclaim any liability arising from any technical issues, errors, or interruptions in the functioning of our website.",
      },
    ],
  },
  {
    header: "Limitation of Liability",

    bulletList: [
      {
        header: "",
        text: ". In no event shall Dibo Ruwa, its officers, directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or services. ",
      },
      {
        header: "",
        text: "Dibo Ruwa's total liability to you for any claims arising out of your use of our website or services shall not exceed the amount paid by you for the specific services in question. ",
      },
    ],
  },
  {
    header: "Indemnification",
    text: "You agree to indemnify and hold Dibo Ruwa and its affiliates, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of our website or services or any violation of these Terms and Conditions",
  },
  {
    header: "Governing Law and Jurisdiction",
    text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Nigeria. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Nigeria",
  },
  {
    header: "Changes to Terms and Conditions",
    text: "Dibo Ruwa reserves the right to modify or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review these terms periodically to stay informed about any updates.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about these Terms and Conditions or our website, please contact us at [email address].",
  },
];

export interface Plan {
  title: string;
  features: string[];
  total: string;
}

export interface PlanDetails {
  [subscription: string]: Plan[]
}

export const planDetails: PlanDetails = {
  Food: [
    {
      title: "free",
      features: ["Feature 1", "Feature 2"],
      total: "$50",
    },
    {
      title: "Starter",
      features: ["Feature 1", "Feature 2"],
      total: "$20",
    },
    {
      title: "Premium",
      features: ["Feature 1", "Feature 3"],
      total: "$30",
    },
    {
      title: "Enterprise",
      features: ["Feature 1", "Feature 3"],
      total: "$30",
    },
  ],
  Laundry: [
    {
      title: "Monthly Plan",
      features: ["Feature 1", "Feature 2",],
      total: "$50",
    },
    {
      title: "Weekly Plan",
      features: ["Feature 1", "Feature 2"],
      total: "$20",
    },
    {
      title: "Biweekly Plan",
      features: ["Feature 1", "Feature 3"],
      total: "$30",
    },
  ],
  Cleaning: [
    {
      title: "Monthly Plan",
      features: ["Feature 1", "Feature 2", ],
      total: "$50",
    },
    {
      title: "Weekly Plan",
      features: ["Feature 1", "Feature 2"],
      total: "$20",
    },
    {
      title: "Biweekly Plan",
      features: ["Feature 1", "Feature 3"],
      total: "$30",
    },
  ],
};
