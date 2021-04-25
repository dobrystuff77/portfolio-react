import React, { Component } from "react";
import Particles from "react-particles-js";
import Avatar from "./images/avatar-edit.png";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
        <div className="main-text">
          <Particles
            canvasClassName="particles"
            params={{
              particles: {
                number: {
                  value: 120
                }
              }
            }}
          />
          <div className="triangle-two">
            <img src={Avatar} alt="avar" className="avatar-two" />
          </div>
          <div className="triangle"></div>
          <div className="title">Front-End Web Developer</div>
          <div className="short-note">
            Programmer with background in jazz music, and passion for coding
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
