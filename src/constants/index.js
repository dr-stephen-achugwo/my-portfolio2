import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
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
  meta,
  starbucks,
  tesla,
  shopify,
  GH,
  travel,
  q,
  java,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vercel",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Skilled in HTML, CSS, JavaScript, and React.js, ensuring the creation of responsive, dynamic, and interactive web applications.",
      "Proficient in using Bootstrap and Tailwind CSS to build responsive and highly customizable UI designs for web applications.",
      "Hands-on experience with integrating RESTful APIs and third-party services to enhance the functionality of web applications.",
      "Expertise in using Redux and Context API for efficient state management and seamless data flow within applications.",
      "Solid understanding of MySQL and MongoDB for managing both structured and unstructured data efficiently.",
    ],
  },
  {
    title: "Java Development",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Building and maintaining applications using Java.",
      "Creating smooth communication between different parts of the app.",
      "Working with team members to improve features and fix issues.",
      "Writing clean and efficient code to make the app run better.",
    ],
  },

  {
    title: "Web Developement",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Nov 2024  - Present",
    points: [
      "Developed and maintained web applications using React.js, Node.js, and MongoDB, ensuring efficient backend and database integration.",
      "Built GreenHeaven, a plant-related eCommerce platform, using MongoDB for data storage and Node.js for backend development.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality products.",
      "Implemented responsive design to ensure optimal user experience across all devices and browsers.",
      "Ensured database management using MongoDB to handle unstructured data, improving product recommendations and user experience.",
      "Participated in code reviews, providing constructive feedback to enhance code quality and application performance.",
    ],
  },
  {
    title: "UI/UX Designer",
    icon: figma,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Designed and developed the mobile app 'PUCIT Pulse' using Figma, focusing on user-friendly UI and seamless user experience.",
      "Collaborated with product managers, developers, and designers to create a high-quality, interactive mobile application.",
      "Created responsive design elements to ensure the app's optimal performance across various devices and screen sizes.",
      "Participated in design reviews, providing feedback to enhance UI/UX elements and improve overall functionality of the app.",
    ],
  },
  {
    title: "Backend Tools & Technologies",
    icon: git,
    iconBg: "white",
    date: "Nov 2022 - Present",
    points: [
      "Working with databases like SQL and MongoDB to store, manage, and retrieve data efficiently.",
      "Using Cloudinary for image and file storage, ensuring smooth media management in web applications.",
      "Implementing user authentication and authorization using tools like JSON Web Tokens (JWT) for secure access control.",
      "Connecting backend services with frontend using RESTful APIs to ensure smooth data flow and interaction.",
      "Collaborating with teams to integrate backend systems and ensure performance, reliability, and scalability.",
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

const projects = [
  {
    name: "GREEN HEAVEN",
    description:
      "Currently, I am working on GreenHeaven, a plant-related e-Commerce platform that enables users to browse, purchase, and manage plant-related products from various providers, offering a seamless and efficient solution for plant enthusiasts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: GH,
    source_code_link: "https://github.com/NamrahAkram2655/GREENHEAVEN-FYP",
  },
  {
    name: "Quiz App",
    description:
      "A fun and engaging quiz application that allows users to test their knowledge with multiple-choice questions. Users can answer questions, track their score in real-time, and see their performance at the end of the quiz. Built with modern frontend technologies for a smooth and interactive experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "quiz.png",
    source_code_link: "https://github.com/NamrahAkram2655/quiz-app",
  },
  {
    name: "Movie App",
    description:
      "A movie browsing application that allows users to search, explore, and save their favorite movies. Built using modern frontend technologies to provide a responsive and engaging user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "movie.png",
    source_code_link: "https://github.com/NamrahAkram2655/Movie-App",
  },
  {
    name: "Expense Tracker",
    description:
      "A simple and efficient expense tracker that helps users monitor their income and spending. Includes features for adding transactions, calculating balances, and visualizing data for better budgeting.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "ET.png",
    source_code_link: "https://github.com/NamrahAkram2655/Expense-Tracker",
  },
  {
    name: "WorldWise App",
    description:
      "A smart travel tracking app that lets users log visited cities and visualize travel locations on an interactive map. Built with React and modern UI libraries to create an intuitive and visually rich experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "world.PNG",
    source_code_link: "https://github.com/NamrahAkram2655/world-tour",
  },
];

export { services, technologies, experiences, testimonials, projects };
