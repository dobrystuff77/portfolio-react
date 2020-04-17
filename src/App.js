import React from "react";
import "./App.css";

//new
import Newnavbar from "./components/Newnavbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";

// import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
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

export default App;
