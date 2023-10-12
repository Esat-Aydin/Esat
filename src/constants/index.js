import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  docker,
  carrent,
  jobit,
  tripguide,
  // threejs,
  rabobank,
  bpa,
  bittikk,
  expertise,
  epitomeent,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: ".Net Developer",
    icon: backend,
  },
  // {
  //   title: "Fullstack Developer",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT support",
    company_name: "Rabobank",
    icon: rabobank,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: ".Net developer intern",
    company_name: "Business Process Automation B.V.",
    icon: bpa,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const projects = [
  {
    name: "BitTikk",
    description:
    "Developing a cross-platform mobile application using Ionic with Angular. This application allows users to connect with their crypto wallets and transfer funds to each other through social media platforms. Each transfer link is user-specific and generated with both a link and a QR code. The tech stack includes: Ionic with Angular, Typescript, and Firebase Cloud Messaging.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Ionic",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: bittikk,
    source_code_link: "https://github.com/",
  },
  {
    name: "Epitome Entertainment",
    description:
      "A webapplication where users can sign in or create an account for a specific event. The accounts are saved in a PostgreSQL database. The system admin can view the details of the users in the Epitomeent dashboard. The deployment and hosting was done by me on a Ubuntu VPS server with nginx. The tech stack includes: .Net, Blazor, PostgreSQL and Entity Framework.",
    tags: [
      {
        name: "Blazor",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: epitomeent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Esthetisch Expertise",
    description:
      "Created a website for Esthetisch Expertise. Shows different services that are being offered by Esthetisch Expertise. The website is created using a low-code platform named Framer and also the hosting is done through them.",
    tags: [
      {
        name: "Framer",
        color: "blue-text-gradient",
      }
    ],
    image: expertise,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };