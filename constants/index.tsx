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
          { name: "Food", path: "/food", icon: assets.food }
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

export const heroContent = {
  title: "Break free from mundane \n tasks that drain your time and energy",
  subtitle:
    "we're committed to simplifying your life and bringing joy back into your daily routine. Discover a world where laundry, cleaning, meals, and culinary skills are no longer a source of stress but a pathway to a more fulfilling life",
};

export const services = [
  {
    title: "Home Cleaning",
    image: assets.broom,
    color: 'primary',
    bg: 'primary-20',
    content:
      "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
    cta: {
      label: "Order Now",
      path: "/cleaning",
    },
  },
  {
    title: "Laundry",
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
