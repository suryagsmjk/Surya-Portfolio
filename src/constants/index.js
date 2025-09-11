import {
  react,
  backend,
  frontend,
  web,

  html,
  css,
  javascript,
  reactjs,
  redux,
  nodejs,
  expressjs,
  mongodb,
  git,
  figma,
  // typescript,
  // tailwind,
  // docker,
  // threejs,

  Xylonic,
  pinke,
  jspider,

  quicksoru,
  jobit,
  tripguide,
  wlt,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React js Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    title: "HTML"
  },
  {
    name: "CSS 3",
    icon: css,
    title: "CSS"
  },
  {
    name: "JavaScript",
    icon: javascript,
    title: "JavaScript"
  },
  {
    name: "React JS",
    icon: reactjs,
    title: "React JS"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    title: "Redux"
  },

  {
    name: "Node JS",
    icon: nodejs,
    title: "Node js"
  },
  {
    name: "Express",
    icon: expressjs,
    title: "Express Js"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    title: "MongoDB"
  },
  {
    name: "git",
    icon: git,
    title: "Github"
  },
  {
    name: "figma",
    icon: figma,
    title: "Figma"
  },

  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React js Developer",
    company_name: "Xylonic",
    icon: Xylonic,
    iconBg: "#E6DEDD",
    date: "March 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MEAN Full Stack Developer (INTERSHIP )",
    company_name: "Pinke Capital - Arul Financiers Pvt LTD  ",
    icon: pinke,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [

      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Full stack Developement Course",
    company_name: "jspider training institute ",
    icon: jspider,
    iconBg: "#E6DEDD ",
    date: "Nov 2023 - March 2024",
    points: [
      "Comprehensive training on MongoDB, Express.js, React.js, and Node.js",
      "Hands-on experience with full-stack development, building and deploying web applications",
      "Focus on backend development using Node.js, database management with MongoDB, and frontend development with React.",
      "Built and optimized several MERN stack applications, integrating front-end and back-end functionalities seamlessly.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Widelast Technology Private Limited",
    icon: wlt,
    iconBg: "#E6DEDD ",
    date: "Apr 2025 -Present",
    points: [
      "Comprehensive training on Dynamic Website , Role base Auth, React.js, and StoryBook",
      "Hands-on experience with full-stack development, building and deploying web applications",
      "Built and optimized several MERN stack applications, integrating front-end and back-end functionalities seamlessly.",
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
    name: "Quick Soru",
    description:
      "This project is a web-based platform that allows users to browse restaurants, order food, and track deliveries. The platform provides a simple interface for searching foods, viewing menus, and placing orders. Key features include.",
    tags: [
      {
        name: "HTML",
        color: "bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent",
      },
      {
        name: "CSS",
        color: "bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent",
      },
      {
        name: "JavaScript",
        color: "bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent",
      },
      {
        name: "React js",
        color: "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent",
      },
      {
        name: "Node js",
        color: "bg-gradient-to-t from-slate-900 to-slate-50 bg-clip-text text-transparent",
      },
      {
        name: "Express js",
        color: "bg-gradient-to-r from-orange-300 to-rose-300 bg-clip-text text-transparent",
      },
      {
        name: "MongoDB",
        color: "bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent",
      },

    ],
    image: quicksoru,
    source_code_link: "https://github.com/suryagsmjk/Food-Delivery",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };