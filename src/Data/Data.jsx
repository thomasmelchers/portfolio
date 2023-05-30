import curryParadise from "../assets/screenshots/curry-paradise.png";
//import cookieClicker from "../assets/screenshots/cookie-clicker.png";
import dataVisualization from "../assets/screenshots/data-visualization.png";
import dinoRPG from "../assets/screenshots/dino-rpg.png";
import codeflix from "../assets/screenshots/codeflix.png";
import friendlyBook from "../assets/screenshots/friendly-book.png";
import greenCottage from "../assets/screenshots/greencottage.png";
import wiki from "../assets/screenshots/wiki.png";
import actyv from "..//assets/screenshots/actyv.png";

export const skillsData = [
  "HTML5 & CSS3",
  "JavaScript",
  "TypeScript",
  "Java 1.8 & 11",
  "React",
  "Node JS",
  "Mongo DB",
  "Material UI",
];

export const experiencesData = [
  {
    id: 1,
    title: "BeCode",
    position: "Student",
    location: "Brussels",
    period: "September 2021 to April 2022",
    description:
      "A seven-month intensive bootcamp based on a self-learning and active pedagogy. There I have developed individual and team projects by following an agile methodology.",
  },
  {
    id: 2, 
    title: "Actyv",
    position: "Developer",
    location: "Brussels",
    period: "March to April 2022",
    description: "During the BeCode training in a team of four, we have completed our first client project. We have built a showcase website to present the purpose of a cultural immersion NPO and help the founder to find new partners."
  },
  {
      id: 3, 
      title: "Nutrinomics",
      position: "Developer",
      location: "Brussels",
      period: "May to June 2022",
      description: "A two-month internship as a fullstack developer in a healthcare technology start-up improving the quality of life and the nutritional status of patiens suffering of cancer and chronic diseases.",
  },
  {
      id: 4,
      title: "Iptor",
      position: "Technical Consultant",
      location: "Ghent & hybrid",
      period: "November 2023 to Current",
      description: "",
  }
];

export const worksData = [
  {
    id: 1,
    projectName: "Curry Paradise",
    image: curryParadise,
    technologies: "HTML, CSS, Bootstrap",
    description:
      "Curry Paradise is my first solo project at BeCode. It is a fake website of a Sri Lankan restaurant. The purpose of this exercice was to practice my HTML and CSS knowledge and to discover Bootstrap",
    github: "https://github.com/thomasmelchers/restaurant-css-framework",
    url: "https://thomasmelchers.github.io/restaurant-css-framework/",
    role: "Front-End",
    status: "Done",
  },
  /* {
        id: 2,
        projectName: 'Cookie Clicker', 
        image: cookieClicker,
        technologies: 'HTML, CSS, JS',
        description: 'My first team project at BeCode was to create a clone of the well-known cookie-clicker game. As much as click, as much your score will be high and you unlock some bonus.',
        github: 'https://github.com/thomasmelchers/Cookie-clicker',
        url:'https://marinellv.github.io/Cookie-clicker/',
        role: 'Front-End',
        status: 'Done'
    }, */
  {
    id: 3,
    projectName: "Data-Visualisation",
    image: dataVisualization,
    technologies: "HTML, CSS, JS, Chart.js",
    description:
      "On this project, I have to create three charts and to integrate then into the webpage. The purpose of this exercice was to handle the DOM manipulation, and using some method to fetch data",
    github: "https://github.com/thomasmelchers/js-datavisualisation-challenge",
    url: "https://thomasmelchers.github.io/js-datavisualisation-challenge/",
    role: "Front-End",
    status: "Done",
  },
  {
    id: 4,
    projectName: "Dino RPG",
    image: dinoRPG,
    technologies: "HTML, CSS, JS",
    description:
      "I create a RPG where to dinosaurs are fighting eachother. It is a consolidation JS work",
    github: "https://github.com/thomasmelchers/js-rpg",
    url: "https://thomasmelchers.github.io/js-rpg/",
    role: "Front-End",
    status: "Done",
  },
  {
    id: 5,
    projectName: "Codeflix",
    image: codeflix,
    technologies: "HTML, CSS, PHP, SQL, Bootstrap",
    description:
      "Codeflix is a platform where you can discover tutorials about coding. The purpose of this project was to create a dynamic website inspired by Netflix, Amazon or Disney +",
    github: "https://github.com/thomasmelchers/codeflix",
    url: "http://www.codefilx.kamilbiczyk.be/",
    role: "Project-Manager, Back-End",
    status: "Done",
  },
  {
    id: 6,
    projectName: "FriendlyBook",
    image: friendlyBook,
    technologies: "Node.JS, Express, MongoDB, React",
    description:
      "FriendlyBook is a platform directly inspired by Facebook. I create here my first MERN with two fron-end developers.",
    github: "https://github.com/thomasmelchers/BookFace",
    url: "https://friendlybooktrio.herokuapp.com/",
    role: "Back-End",
    status: "Done",
  },
  {
    id: 7,
    projectName: "Green Cottage",
    image: greenCottage,
    technologies: "Node.JS, Express, MongoDB, React",
    description:
      "Individual project where I create a plateform where users can registrate their accomodation or can book one. The project is still running.",
    github: "https://github.com/thomasmelchers/npProject",
    url: "https://green-cottages.herokuapp.com/",
    role: "Front-End & Back-End",
    status: "In Progress",
  },
  {
    id: 8,
    projectName: "Rick and Morty Wiki",
    image: wiki,
    technologies: "React",
    description:
      "I followed a tutorial to have a better comprehension of React hooks",
    github: "https://github.com/thomasmelchers/wiki-rick-and-morty",
    url: "https://wiki-rickandmorty.herokuapp.com/",
    role: "Front-End",
    status: "Done",
  },
  {
    id: 9,
    projectName: "Actyv",
    image: actyv,
    technologies: "React, Contentful",
    description:
      "Client project where we create of a showcase website for a cultural immersion NPO",
    github:
      "https://github.com/becodeorg/Swartz-5-Client-Application-d-Immersion-Culturelle",
    url: "https://actyv.netlify.app/",
    role: "Front-End",
    status: "Done",
  },
//   {
//     id: 10,
//     projectName: "Task Planner",
//     technologies: "React, Typescript",
//     description:
//       "Project to practice building front-end application with typescript and react",
//     github:
//       "https://github.com/thomasmelchers/task-planner",
//     url: "https://thomas-melchers-task-planner.netlify.app/",
//     role: "Front-End",
//   }, 
//   {
//     id: 11, 
//     projectName: "Task Planner",
//     technologies: "React, Typescript",
//     description:
//       "Project to practice building front-end application with typescript and react",
//     github:
//       "https://github.com/thomasmelchers/task-planner",
//     url: "https://thomas-melchers-task-planner.netlify.app/",
//     role: "Front-End",
//   }
];

