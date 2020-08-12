import React, { Component } from "react";

import "./App.css";

import Newnavbar from "./components/Newnavbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
// import Contact from "./sections/NewContact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";

class App extends Component {
  state = {};

  // componentDidMount() {
  //   // console.log("!!!", data);
  //   // console.log(data.projects.length);
  //   // for (let i = 0; i < data.projects.length; i++) {
  //   //   console.log(data.projects[i].live_page);
  //   //   fetch(data.projects[i].live_page);
  //   // }
  //   fetch("https://www.wp.pl/");
  // }

  render() {
    return (
      <>
        <Newnavbar />
        <Main />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
