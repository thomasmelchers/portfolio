import curryParadise from "../Pictures/screenshots/curry-paradise.png";
//import cookieClicker from "../Pictures/screenshots/cookie-clicker.png";
import dataVisualization from "../Pictures/screenshots/data-visualization.png";
import dinoRPG from "../Pictures/screenshots/dino-rpg.png";
import codeflix from "../Pictures/screenshots/codeflix.png";
import friendlyBook from "../Pictures/screenshots/friendly-book.png";
import greenCottage from "../Pictures/screenshots/greencottage.png";
import wiki from "../Pictures/screenshots/wiki.png";
import actyv from "../Pictures/screenshots/actyv.png";
import taskPlanner from "../Pictures/screenshots/task-planner.png"
import actyvLogo from "../Pictures/logos/actyv.png"
import nutrinomicsLogo from "../Pictures/logos/nutrinomics.jpeg"
import becodeLogo from "../Pictures/logos/becode.jpeg"
import iptorLogo from "../Pictures/logos/iptor.png"

export const experiencesData = [
  {
    id: 1,
    title: "BeCode",
    position: "Developer",
    location: "Brussels",
    period: "September 2021 to April 2022",
    url: "https://becode.org/",
    logo: becodeLogo,
    description:
      "A seven-month intensive bootcamp based on a self-learning and active pedagogy. There I have developed individual and team projects by following an agile methodology.",
    technologies: ["HTML5", "CSS", "JavaScript", "PHP", "Node JS", "React JS", "MongoDB", "Git"],
  },
  {
    id: 2, 
    title: "Actyv",
    position: "Developer",
    location: "Brussels",
    period: "March to April 2022",
    url: "https://actyv.netlify.app/",
    logo: actyvLogo,
    description: "During the BeCode training in a team of four, we have completed our first client project. We have built a showcase website to present the purpose of a cultural immersion NPO and help the founder to find new partners.",
    technologies: ["React JS", "Contentful", "Material UI", "Git"],
  },
  {
      id: 3, 
      title: "Nutrinomics",
      position: "Fullstack Developer",
      location: "Brussels",
      period: "May to June 2022",
      url: "https://zestcancer.com/",
      logo: nutrinomicsLogo,
      description: "A two-month internship as a fullstack developer in a healthcare technology start-up improving the quality of life and the nutritional status of patiens suffering of cancer and chronic diseases.",
      technologies: ["TypeScript", "Angular", "Node JS", "MongoDB", "SASS", "Git"],
  },
  {
      id: 4,
      title: "Iptor",
      position: "Technical Consultant",
      location: "Ghent & hybrid",
      period: "November 2023 to Current",
      url: "https://iptor.com/",
      logo: iptorLogo,
      description: "As a technical consultant in an international leader of cloud-based ERP software solutions in Pharma, Publishing, Supply Chain and Timber sectors, I implement new features in Java and Javascript for different costumers.",
      technologies: ["Java 8 & 11", "Maven", "React JS", "JavaScript", "SQL", "Git"],
  }
];

export const personnalProjectsData = [

  {
    role: "Developer, Project Manager",
    tasks: "Front-End, Back-End",
    period: "June 2022 to current",
    technologies: ["Node.JS", "React JS", "TypeScript", "Java", "Spring", "MongoDB", "MySQL", "SQL", "Material UI", "TailwindCSS", "Git"],
    intro: "I keep learning and practicing my knowledge by creating projects as a hobby after my working days.",
    description: ["To practice TypeScript, I have created a 'Scrum Board' project where you can insert, modify and delete some tickets from the planning. I have also created some MERN stack projects with TypeScript and try to implement various fonctionalities.", "To practice Java, I have created several projects such as the logic of a RPG game to be familiar with heritage and interface concepts. I have also learned web services and now I create some API with MySQL, and I parse Excel files. I am also interested in new java technologies such as Spring which I presently study the bases."],
  }
]


export const projectsData = [
  {
    id: 1,
    projectName: "Curry Paradise",
    image: curryParadise,
    technologies: ["HTML", "CSS", "Bootstrap"],
    description:
      "Curry Paradise is my first project at BeCode. It is a fake website of a Sri Lankan restaurant. The purpose of this exercise was to practice HTML, CSS knowledge and to discover Bootstrap.",
    github: "https://github.com/thomasmelchers/restaurant-css-framework",
    url: "https://thomasmelchers.github.io/restaurant-css-framework/",
    role: ["Developer"],
    status: "Done",
    tasks: ["Front-End"],
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
    technologies: ["HTML", "CSS", "JS", "Chart.js"],
    description:
      "This JavaScript project has been done during the BeCode cursus. I have to handle data and to create three charts and to integrate then into the webpage. The purpose of this exercise focus on handling DOM manipulation and using some methods to fetch data.",
    github: "https://github.com/thomasmelchers/js-datavisualisation-challenge",
    url: "https://thomasmelchers.github.io/js-datavisualisation-challenge/",
    role: ["Developer"],
    status: "Done",
    tasks: ["Front-End"],
  },
  {
    id: 4,
    projectName: "Dino RPG",
    image: dinoRPG,
    technologies: ["HTML", "CSS", "JS"],
    description:
      "This project is a consolidation JavaScript learning project. The content is a RPG game where dinosaurs are fighting each other. Each player selects a dinosaur which owns its specific behavior and specification.",
    github: "https://github.com/thomasmelchers/js-rpg",
    url: "https://thomasmelchers.github.io/js-rpg/",
    role: ["Developer"],
    status: "Done",
    tasks: ["Front-End"],
  },
  {
    id: 5,
    projectName: "Codeflix",
    image: codeflix,
    technologies: ["HTML", "CSS", "PHP", "SQL", "Bootstrap"],
    description:
      "Codeflix is a platform where you can discover tutorials about coding. The purpose of this project was to create a dynamic website inspired by Netflix, Amazon or Disney +",
    github: "https://github.com/thomasmelchers/codeflix",
    url: "",
    role: ["Project-Manager", "Developer", "Git Master"],
    status: "Done",
    tasks: ["Back-End"],
  },
  {
    id: 6,
    projectName: "FriendlyBook",
    image: friendlyBook,
    technologies: ["Node.JS", "Express", "MongoDB", "React"],
    description:
      "FriendlyBook is a social network platform directly that we created in a team of three during our training at BeCode. This app is our first MERN stack project for all of us. My two team-mates were focus on the front-end meanwhile I discovered Node.JS and MongoDB and I created all the Back-End layer. There are among the features an authentication system, a post creation linked to a user, the possibility of pictures upload, a profile page which can be edited, ...",
    github: "https://github.com/thomasmelchers/BookFace",
    url: "",
    role: ["Developer"],
    status: "Done",
    tasks: ["Back-End"],
  },
  {
    id: 7,
    projectName: "Green Cottage",
    image: greenCottage,
    technologies: ["Node.JS", "Express", "MongoDB", "React"],
    description:
      "Green Cottage is an individual MERN stack project inspired of AirBnb. During this two-month project, I learned the base of React and Material UI and I created all the back-end layer. The application has an authentication system, a profile page, an accomodation registration, a map localisation with MapBox. Unfortunately, I didn't have time to finish all the project.",
    github: "https://github.com/thomasmelchers/npProject",
    url: "",
    role: ["Project Leader", "Developer"],
    status: "In Progress",
    tasks: ["Front-End", "Back-End"],
  },
  // {
  //   id: 8,
  //   projectName: "Rick and Morty Wiki",
  //   image: wiki,
  //   technologies: "React",
  //   description:
  //     "I followed a tutorial to have a better comprehension of React hooks",
  //   github: "https://github.com/thomasmelchers/wiki-rick-and-morty",
  //   url: "https://wiki-rickandmorty.herokuapp.com/",
  //   role: "Front-End",
  //   status: "Done",
  // },
  {
    id: 9,
    projectName: "Actyv",
    image: actyv,
    technologies: ["React", "Contentful", "Material UI"],
    description:
      "Actyv is a my first client project realized in a team of four at BeCode. We created from the A to Z a showcase website for a cultural immersion NPO. My role during this project was to communicate with the client, to create a requirement document, to code some part of the app with React and Material UI, set up Contentful and deploy the website.",
    github:
      "https://github.com/becodeorg/Swartz-5-Client-Application-d-Immersion-Culturelle",
    url: "https://actyv.netlify.app/",
    role: ["Developer", "Project Manager"],
    status: "Done",
    tasks: ["Front-End"],
  },
  {
    id: 10,
    projectName: "Task Planner",
    image: taskPlanner,
    technologies: ["React", "Typescript", "Material UI"],
    description:
      "Task Planner is a consolidation React project where I introduce TypeScript. It is possible to register some tasks and track their advancement, edit them and remove from the planning. To improve this front-end application, I would like to add a back-end to store the task and add an authentication system.",
    github: "https://github.com/thomasmelchers/task-planner",
    url: "https://thomas-melchers-task-planner.netlify.app/",
    role: ["Developer"],
    tasks: ["Front-End"],
    status: "Done",
  },
    {
      id: 11,
      projectName: "Fruits Shop API",
      technologies: ["Java", "SQL", "MySQL"],
      librairies: ["Jersey"],
      description:
        "This Java project is a simulation of shop's activities. The shop can purchase some products, track their stock and sell products. The shop can upload an Excel file with purchases data and then update their stock. The features present are CRUD system for the 3 tables, upload Excel file, creation of unique ID, several business logic, app architecture based on controller, BO, DAO.",
      github:
        "https://github.com/thomasmelchers/fruitShopApi",
      url: "",
      role: ["Developer"],
      tasks: ["Back-End"]
    }
];

