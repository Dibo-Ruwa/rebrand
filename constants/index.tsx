import { assets } from "@/public/assets";

// Base URL
const baseURL: string = "https://diboruwa.com";

// Route configuration
export interface Route {
  name: string;
  path: string;
  icon?: string;
  subroutes?: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export const routes: Route[] = [
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
];

export const HWW = [
  {
    image: "h",
    title: "Hand-Picked Selection or Choose a plan",
    content:
      "Choose from a specially curated menu of delicious meals, sourced from the best local eateries, all in one place.",
    // content:
    //   "Choose a meal schedule that works for you; when you want it, how you want it. It takes less than 5 minutes.",
  },
  {
    image: "h",
    title: "Effortless Ordering",
    content:
      "Browse, select, and place your order in just a few clicks. A streamlined process designed for your convenience.",
    //  content:
    //   "We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.",
  },
  {
    image: "h",
    title: "Reliable & Prompt Delivery",
    // title: "You Heat and Eat",
    content:
      "Experience the joy of having your favorite meals delivered right to your door, fresh and on time.",
    // content:
    //   "With Just 5 Minutes of Heating, Your Meal Is Good to Go, or Refrigerate It for a Later Tasty Treat",
  },
];

export const services = [
  {
    title: "Food",
    category: "food",
    image: assets.food,
    color: "color3",
    bg: "color3-20",
    content:
      "Convenient, ready-to-eat meals delivered to your door. \nStress-free eating.",
    cta: {
      label: "Order Now",
      path: "/food",
    },
  },

  {
    title: "Laundry",
    category: "laundry",
    image: assets.soap,
    color: "color2",
    bg: "color2-20",
    content:
      "Let us do the laundry so you can reclaim your time.\n 24/7 laundry service for a stress-free life.",
    cta: {
      label: "Schedule Pickup",
      path: "/laundry",
    },
  },
  {
    title: "Home Cleaning",
    category: "cleaning",
    image: assets.broom,
    color: "primary",
    bg: "primary-20",
    content:
      "We make home cleaning easy. \n\ Book a cleaning session today and enjoy a spotless space. \n Scheduling is quick and hassle-free.",
    cta: {
      label: "Book Now",
      path: "/cleaning",
    },
  },

  // {
  //   title: "Training",
  //   category: "training",
  //   image: assets.chefHat,
  //   color: "color4",
  //   bg: "color4-20",
  //   content:
  //     "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
  //   cta: {
  //     label: "Order Now",
  //     path: "/trainning",
  //   },
  // },
];

export const accordionData = [
  {
    id: 1,
    title: "How can I easily place an order?",
    content:
      "Placing an order is a breeze! Just navigate to the desired service on our website, select your preferences, and follow the simple checkout process. For regular users, our dashboard provides even quicker access to frequent orders.",
  },
  {
    id: 2,
    title: "Are there subscription plans available for regular services",
    content:
      "Yes, we offer subscription plans that provide additional benefits and savings for our regular customers.",
  },
  {
    id: 3,
    title: "How do you ensure the quality of food delivered?",
    content:
      "We partner with reputable restaurants and enforce strict quality checks to ensure your food is fresh, hygienic, and delicious.",
  },
  {
    id: 4,
    title:
      "What measures are taken to care for delicate garments during laundry?",
    content:
      "Our laundry professionals are trained in fabric care, ensuring that delicate garments are handled with utmost care and precision.",
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
    icon: "/people.png",
    description: "highly experienced cleaning team",
  },
  {
    icon: "/Group.png",
    description: "All equipment and chemicals provided",
  },
  {
    icon: "/shield-tick.png",
    description: "Insured services against damage.",
  },
  {
    icon: "/message-notif.png",
    description: "Unlimited, responsive customer service",
  },
];

export const subscriptionPlans = [
  {
    title: "One-Off Cleaning Plan",
    content: "For regular upkeep and a consistently clean home.",
    features: [
      "1 Bedrooms",
      "1 Living Rooms/ Dining Areas",
      "Bathroom sanitization",
      "Kitchen cleanup",
      "Vacuuming and mopping",
      "Dusting of all surfaces",
    ],
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/standard",
    },
  },
  // {
  //   image: "/path/to/deep-image.png",
  //   title: "Deep Cleaning",
  //   content: "A thorough clean for homes that need some extra attention.",
  //   features: [
  //     "Everything from Standard Cleaning... Plus",
  //     "2 Bedrooms",
  //     "1 Living Rooms/ Dining Areas",
  //     "2 toilet/bathrooms",
  //     "1 kitchen",
  //     "Deep floor scrubbing",
  //     "Window and sill cleaning",
  //   ],
  //   cta: {
  //     label: "Subscribe Now",
  //     path: "/subscribe/deep",
  //   },
  // },
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
  {
    title: "Requests",
    image: assets.food,
    url: "/dashboard/requests",
  },
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
  total: string | number;
  planCode?: string;
}

export interface PlanDetails {
  [subscription: string]: Plan[];
}

export const planDetails: PlanDetails = {
  Food: [
    {
      title: "Starter",
      features: [
        "1 meal per week",
        "Weekly delivery",
        "Delivered once a week",
        "Standard plate",
        "Ideal for occasional treats",
      ],
      total: 7700,
      planCode: "PLN_sqxrib4c4knnh0i",
    },
    {
      title: "Regular",
      features: [
        "2 meal per week",
        "Standard plate",
        "Weekly delivery",
        "Delivered once a week",
        "Ideal for weekend treats",
      ],
      total: 14980,
      planCode: "PLN_w988l6ia7g7dfq6",
    },
    {
      title: "Enterprise",
      features: [
        "5 meal per week",
        "Standard plate + extra",
        "Weekdays Delivery",
        "Delivered 5 times a week",
        "Perfect for workweek meals",
      ],
      total: 34970,
      planCode: "PLN_pz6i6zhbcwvfdk7",
    },
    {
      title: "Gold",
      features: [
        "7 meal per week",
        "Standard plate + extra",
        "Daily Delivery",
        "Delivered 7 times a week",
        "Perfect for everyday meals",
        "A meal every day",
      ],
      total: 47960,
      planCode: "PLN_f5nb851w9xpbtto",
    },
  ],
  Laundry: [
    {
      title: "Lite Laundry",
      features: [
        "Dibo Ruwa Laundry Bag",
        "30 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Picked up once a month",
        "Ideal for individual",
      ],
      total: 11960,
      planCode: "PLN_jjx1iqwxol2hch4",
    },
    {
      title: "Regular Laundry",
      features: [
        "Dibo Ruwa Laundry Bag",
        "30 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Quick-dry service",
        "Picked up twice a month",
        "Ideal for family of two",
      ],
      total: 22100,
      planCode: "PLN_jd0nwcnhvifs0no",
    },
    {
      title: "Family",
      features: [
        "Dibo Ruwa Laundry Bag",
        "50 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Quick-dry service",
        "Emergencies",
        "Picked up four times a month",
        "Ideal for family of four",
      ],
      total: 36700,
      planCode: "PLN_d3km1qswvj8nbot",
    },
  ],
  Cleaning: [
    {
      title: "Standard",
      features: [
        "1 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],
      total: 12900,
      planCode: "PLN_fw9vc36viohwk6l",
    },
    {
      title: "Premium",
      features: [
        "2 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 22750,
      planCode: "PLN_b361yykypop2gfz",
    },
    {
      title: "Deep",
      features: [
        "3 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "2 Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 31900,
      planCode: "PLN_jsbrun8t72zsbiu",
    },
  ],
};

export const teamMembers = [
  {
    name: "Ricketts Rowland",
    role: "Lead Developer",
    imageUrl: "/john-doe.jpg", // Provide the actual image URL
  },
  {
    name: "Ibrahim Saliman Zainab",
    role: "C.E.O",
    imageUrl: "/isz.jpeg", // Provide the actual image URL
  },
  {
    name: "Agula Adams",
    role: "Marketing and Customer Success",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  {
    name: "Hassan Abbas",
    role: "Graphics Designer",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  {
    name: "Adeyemo Akinola Ayomide",
    role: "Frontend Developer",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  {
    name: "Mustapha Idris",
    role: "Head of Operations",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  {
    name: "Yakubu Ibrahim Evuti",
    role: "Operation Manager",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  {
    name: "Okorie Joshua",
    role: "Operation",
    imageUrl: "/ourteam.png", // Provide the actual image URL
  },
  // Add more team members as needed
];
