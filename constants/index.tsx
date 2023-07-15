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
    icon: string;
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
      { name: "Restaurants", path: "/restaurants", icon: "🏪" },
      { name: "Recipes", path: "/recipes", icon: "📚" },
      { name: "Delivery", path: "/delivery", icon: "🚚" },
    ],
  },
  {
    category: "laundry",
    name: "Laundry",
    icon: "🧺",
    paths: [
      { name: "Schedule", path: "/schedule", icon: "📅" },
      { name: "Pricing", path: "/pricing", icon: "💰" },
      { name: "Services", path: "/services", icon: "👚" },
    ],
  },
  {
    category: "loggedInUser",
    name: "Logged In User",
    icon: "👤",
    paths: [
      { name: "Profile", path: "/profile", icon: "👨‍💼" },
      { name: "Settings", path: "/settings", icon: "⚙️" },
      { name: "Orders", path: "/orders", icon: "📦" },
    ],
  },
  {
    category: "cleaning",
    name: "Cleaning",
    icon: "🧹",
    paths: [
      { name: "Services", path: "/services", icon: "🧽" },
      { name: "Pricing", path: "/pricing", icon: "💰" },
      { name: "Schedule", path: "/schedule", icon: "📅" },
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
        name: "Sign up",
        path: "/signup",
        icon: "🛠️",
      },
      {
        name: "Sign in",
        path: "/signin",
        icon: "🛠️",
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
      { name: "About Us", path: "/sublink1" },
      { name: "Pricing", path: "/sublink2" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Food", path: "/sublink4" },
      { name: "Laundry", path: "/sublink5" },
      { name: "Cleaning", path: "/sublink6" },
    ],
  },
  {
    title: "Other",
    links: [
      { name: "Blog", path: "/sublink7" },
      { name: "Contact Us", path: "/sublink8" },
      { name: "Privacy Policy", path: "/sublink8" },
      { name: "Terma & Condition", path: "/sublink9" },
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
    content: "Impress your guest and experience the joys of living in a clean home.",
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
    content:
      "Get a top-to-bottom clean for your whole home.",
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
