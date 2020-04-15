import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    border: "2px solid green",
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: "0px",
    zIndex: "-1"
  },
  aboutContainer: {
    position: "absolute",
    width: "100%",
    top: "100vh",
    height: "100vh",
    border: "4px solid gold",
    background: "white"
    // background: "purple",
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 110
            }
          }
        }}
      />
      <div className={classes.aboutContainer}>
        <div className="omnie">OMNIE fffffffffffffffffffffff</div>
      </div>
    </>
  );
};

export default Home;
