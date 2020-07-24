import React, { Component } from "react";
import "./App.css";

import Newnavbar from "./components/Newnavbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";

import data from "./sections/data.json";

class App extends Component {
  state = {};

  componentDidMount() {
    // console.log("!!!", data);
    // console.log(data.projects.length);
    // for (let i = 0; i < data.projects.length; i++) {
    //   console.log(data.projects[i].live_page);
    //   fetch(data.projects[i].live_page);
    // }
    fetch("http://www.kanten-meer.herokuapp.com");
  }

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
