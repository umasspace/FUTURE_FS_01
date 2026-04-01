import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
  vega,
  tesla,
  shopify,
  meta,
  starbucks,
  speedvitals,
  nestjs,
  reactNative,
  prisma,
  trpc,
  postgresql,
  initialLetterLogo,
} from "../assets";

const initialLetterIcon = initialLetterLogo;
const remainingLetters = "mashankar";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "JWT",
  //   icon: jwt,
  // },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  { name: "React Native", icon: reactNative },
  { name: "Prisma", icon: prisma },
  { name: "tRPC", icon: trpc },
];

const projects = [
  {
    name: "DeeLance",
    description:
      "A decentralized freelancing and recruitment platform built on Web3 technology.",
    features: [
      "Smart contract-based escrow system for secure payments",
      "NFT-powered work verification and portfolio ownership",
      "Integrated metaverse office spaces for remote collaboration",
      "Blockchain-verified talent profiles and credentials",
      "Decentralized dispute resolution mechanism",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
      {
        name: "ethereum",
        color: "orange-text-gradient",
      },
      {
        name: "solidity",
        color: "purple-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: "https://i.pinimg.com/736x/d7/9e/5e/d79e5e9366c12b87e5438355f37b7d55.jpg",
    source_code_link: "https://www.deelance.com/",
    live_link: "https://www.deelance.com/",
  },
  {
    name: "Eldanditechnologies",
    description:
      "A comprehensive digital solutions provider delivering enterprise-grade web and mobile applications.",
    features: [
      "Custom software development tailored to business needs",
      "Cloud infrastructure setup and migration services",
      "UI/UX design with focus on user-centric experiences",
      "Mobile app development for iOS and Android platforms",
      "API integration and third-party service connections",
      "Ongoing maintenance and technical support",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.pinimg.com/736x/a7/96/7f/a7967fdba6039a05e0aef73b0cd28287.jpg",
    source_code_link: "https://eldanditechnologies.vercel.app/",
    live_link: "https://eldanditechnologies.vercel.app/",
  },
  {
    name: "Waffle Wala",
    description:
      "A modern restaurant website for a specialty waffle business showcasing menu offerings and enabling online payments.",
    features: [
      "Interactive digital menu with product descriptions and imagery",
      "Integrated payment system for advance orders and reservations",
      "Location and contact information with embedded maps",
      "Responsive design optimized for mobile browsing",
      "Fast-loading pages with optimized images",
      "SEO-friendly structure for local search visibility",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.pinimg.com/736x/f6/68/34/f66834e630fe45e3a82fd692743c2765.jpg",
    source_code_link: "https://welovewafflewala.vercel.app/",
    live_link: "https://welovewafflewala.vercel.app/",
  },
  {
    name: "Nutrsoul",
    description:
      "A nutrition and wellness platform built on WordPress, connecting users with certified dietitians and personalized health solutions.",
    features: [
      "Custom WordPress theme with tailored design",
      "Dietitian profile pages with specializations and credentials",
      "Integrated booking system for consultation appointments",
      "Payment gateway integration for service fees",
      "Health blog with nutrition articles and resources",
      "Mobile-responsive design for all devices",
      "SEO optimization for health-related searches",
    ],
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "elementor",
        color: "orange-text-gradient",
      },
      {
        name: "woocommerce",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.pinimg.com/736x/97/56/bb/9756bb18f35d11bd4f826b645563c29c.jpg",
    source_code_link: "https://nutrosoul.com/",
    live_link: "https://nutrosoul.com/",
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "SpeedVitals",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "Feb 2025 - April 2025",
    points: [
      "Architected and developed the Real User Monitoring (RUM) web application from scratch using React, Vite, and Tailwind CSS.",
      "Integrated Apache Charts to visualise complex performance datasets, providing actionable insights for business clients.",
      "Collaborated with design and backend teams to integrate new features and enhance user experience.",
      "Tech Stack - React, Tailwind, Vite, Apache Charts.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SpeedVitals",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Spearheaded the migration of the core platform from Sails.js to Next.js, reducing page load times and improving Core Web Vitals scores.",
      "Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG), resulting in a measurable boost in SEO rankings and faster Time to First Byte (TTFB).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};
