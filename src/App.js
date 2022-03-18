import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <NavBar />
        <section id='Home'><Home /></section>
        <section id='About Me'><AboutMe /></section>
        <section id='Projects'><Works /></section>
        <section id='Contact'> <Contact /></section>
    </div>
  );
}

export default App;
