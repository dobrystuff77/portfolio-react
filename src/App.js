import React, { Component } from "react";
import "./App.css";
import Newnavbar from "./components/Newnavbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";

class App extends Component {
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
