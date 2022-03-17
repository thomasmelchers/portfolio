import curryParadise from '../assets/screenshots/curry-paradise.png'
import cookieClicker from '../assets/screenshots/cookie-clicker.png'
import dataVisualization from '../assets/screenshots/data-visualization.png'
import dinoRPG from '../assets/screenshots/dino-rpg.png'
import codeflix from '../assets/screenshots/codeflix.png'
import friendlyBook from '../assets/screenshots/friendly-book.png'
import greenCottage from '../assets/screenshots/greencottage.png'
import wiki from '../assets/screenshots/wiki.png'



const Data = [
   { id: 1,
        projectName: 'Curry Paradise', 
        image: curryParadise,
        technologies: 'HTML, CSS, Bootstrap',
        description: 'Curry Paradise is my first solo project at BeCode. It is a fake website of a Sri Lankan restaurant. The purpose of this exercice was to practice my HTML and CSS knowledge and to discover Bootstrap',
        github: 'https://github.com/thomasmelchers/restaurant-css-framework',
        url:'https://thomasmelchers.github.io/restaurant-css-framework/',
        role: 'Front-End'
    },
    {
        id: 2,
        projectName: 'Cookie Clicker', 
        image: cookieClicker,
        technologies: 'HTML, CSS, JavaScript',
        description: 'My first team project at BeCode was to create a clone of the well-known cookie-clicker game. As much as click, as much your score will be high and you unlock some bonus.',
        github: 'https://github.com/thomasmelchers/Cookie-clicker',
        url:'https://marinellv.github.io/Cookie-clicker/',
        role: 'Front-End',
    },
    { id: 3,
        projectName: 'Data-Visualisation', 
        image: dataVisualization,
        technologies: 'HTML, CSS, JavaScript, Ajax, Chart.js',
        description: 'On this project, I have to create three charts and to integrate then into the webpage. The purpose of this exercice was to handle the DOM manipulation, and using some method to fetch data',
        github: 'https://github.com/thomasmelchers/js-datavisualisation-challenge',
        url:'https://thomasmelchers.github.io/js-datavisualisation-challenge/',
        role: 'Front-End'
    },
    { id: 4,
        projectName: 'Dino RPG', 
        image: dinoRPG,
        technologies: 'HTML, CSS, JavaScript',
        description: 'I create a RPG where to dinosaurs are fighting eachother. It is a consolidation JS work',
        github: 'https://github.com/thomasmelchers/js-rpg',
        url:'https://thomasmelchers.github.io/js-rpg/',
        role: 'Front-End'
    },
    { id: 5,
        projectName: 'Codeflix', 
        image: codeflix,
        technologies: 'HTML, CSS, PHP, SQL, Bootstrap',
        description: 'Codeflix is a platform where you can discover tutorials about coding. The purpose of this project was to create a dynamic website inspired by Netflix, Amazon or Disney +',
        github: 'https://github.com/thomasmelchers/codeflix',
        url:'http://www.codefilx.kamilbiczyk.be/',
        role: 'Project-Manager, Back-End'
    },
    { id: 6,
        projectName: 'FriendlyBook', 
        image: friendlyBook,
        technologies: 'Node.JS, Express, MongoDB, Mongoose, React, Material UI',
        description: 'FriendlyBook is a platform directly inspired by Facebook. I create here my first MERN with two fron-end developers.',
        github: 'https://github.com/thomasmelchers/BookFace',
        url:'https://friendlybooktrio.herokuapp.com/',
        role: 'Back-End'
    },
    { id: 7,
        projectName: 'Green Cottage', 
        image: greenCottage,
        technologies: 'Node.JS, Express, MongoDB, Mongoose, React, Material UI',
        description: 'Individual project where I create a plateform where users can registrate their accomodation or can book one. The project is still running.',
        github: 'https://github.com/thomasmelchers/npProject',
        url:'https://green-cottages.herokuapp.com/',
        role: 'Fullstack'
    },
    { id: 8,
        projectName: 'Rick and Morty Wiki', 
        image: wiki,
        technologies: 'React',
        description: 'I followed a tutorial to have a better comprehension of React hooks',
        github: 'https://github.com/thomasmelchers/wiki-rick-and-morty',
        url:'https://wiki-rickandmorty.herokuapp.com/',
        role: 'Front-End'
    },
]



export default Data