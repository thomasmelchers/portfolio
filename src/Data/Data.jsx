import curryParadise from "../assets/screenshots/curry-paradise.png";
//import cookieClicker from "../assets/screenshots/cookie-clicker.png";
import dataVisualization from "../assets/screenshots/data-visualization.png";
import dinoRPG from "../assets/screenshots/dino-rpg.png";
import codeflix from "../assets/screenshots/codeflix.png";
import friendlyBook from "../assets/screenshots/friendly-book.png";
import greenCottage from "../assets/screenshots/greencottage.png";
import wiki from "../assets/screenshots/wiki.png";
import actyv from "../assets/screenshots/actyv.png";
import taskPlanner from "../assets/screenshots/task-planner.png"
import actyvLogo from "../assets/logos/actyv.png"
import nutrinomicsLogo from "../assets/logos/nutrinomics.jpeg"
import becodeLogo from "../assets/logos/becode.jpeg"
import iptorLogo from "../assets/logos/iptor.png"


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
    technologies: ["React JS", "Contenfull", "Material UI", "Git"],
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
    technologies: ["Node.JS", "React JS", "TypeScript", "Java", "Spring", "MongoDB", "MySQL", "SQL", "Material UI", "TailwindCSS"],
    intro: "I keep learning and practicing my knowledge by creating projects as a hobby after my working days.",
    description: ["To practice TypeScript, I have created a 'Scrum Board' project where you can insert, modify and delete some tickets from the planning. I have also created some MERN stack projects with TypeScript and try to implement various fonctionalities.", "To practice Java, I have created several projects such as the logic of a RPG game to be familiar with heritage and interface concepts. I have also learned web services and now I create some API with MySQL, and I parse Excel files. I am also interested in new java technologies such as Spring which I presently study the bases."],
  }
]


export const projectsData = [
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
    technologies: "React, Contentful",
    description:
      "Client project where we create of a showcase website for a cultural immersion NPO",
    github:
      "https://github.com/becodeorg/Swartz-5-Client-Application-d-Immersion-Culturelle",
    url: "https://actyv.netlify.app/",
    role: "Front-End",
    status: "Done",
  },
  {
    id: 10,
    projectName: "Task Planner",
    image: taskPlanner,
    technologies: "React, Typescript",
    description:
      "Project to practice building front-end application with typescript and react",
    github:
      "https://github.com/thomasmelchers/task-planner",
    url: "https://thomas-melchers-task-planner.netlify.app/",
    role: "Front-End",
  }, 
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

