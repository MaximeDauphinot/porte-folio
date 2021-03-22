import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Maxime Dauphinot | Fullstack Developer", // e.g: 'Name | Developer'
  lang: "fr, en", // e.g: en, es, fr, jp
  description: "Welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, \n I'm",
  name: "Maxime",
  subtitle: "Javascript Fullstack Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "mdauphin.jpg",
  paragraphOne:
    "I’m a Fullstack Developer located in Paris. I have a serious passion for Javascript, Front and Back developpement ( especially React.js and Node.js), dynamic user experiences.",
  paragraphTwo:
    "Well-organised person, problem solver, independent employee with high attention to detail. Fan of Formula 1 and Bmx, outdoor activities, TV series and see some peoples. A young person with lot of resources and energy,",
  paragraphThree:
    "Interested in the entire app developpement spectrum and working on ambitious projects with positive people.",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "flobene.jpg",
    title: "Floriane Benetti",
    info: "",
    info2: "",
    url: "https://floriane-benetti.herokuapp.com/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "pinky.jpg",
    title: "Pinky pimp",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "arcep.jpg",
    title: "Arcep",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "maximedauphinot@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/maxime-dauphinot-bb5850173/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/MaximeDauphinot",
    },
  ],
};
