import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//new
import Newnavbar from "./components/Newnavbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";

// import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <Router>
      <>
        <Newnavbar hash={"home"} />
        <Main />
        <About />
        <Projects />
        <Contact />
      </>
    </Router>
  );
}

export default App;
