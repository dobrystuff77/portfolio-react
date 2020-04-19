import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-scroll";
import Typed from "react-typed";
import Avatar from "./avatar-edit.png";

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
          <div class="triangle-two">
            <img src={Avatar} alt="avar" className="avatar-two" />
          </div>
          <div class="triangle"></div>
          <div class="title">Junior Full Stack Web Developer</div>
          <div className="short-note">
            Programmer with background in jazz music, and passion for coding!
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

// <div class="triangle">
//   <img src={Avatar} alt="avar" className="avatar" />
// </div>

// <Link
//   activeClass="active"
//   to="about-section"
//   spy={true}
//   smooth={true}
//   hashSpy={true}
//   offset={0}
//   duration={500}
// >
//   ARR DOWN
// </Link>;

//
// <div className="main-text">
//   <Typed strings={["Hi, I’m Matt. Nice to meet you."]} typeSpeed={50} />
// </div>
// <Typed
//   strings={["Junior Web Developer"]}
//   typeSpeed={80}
//   backSpeed={90}
//   loop
// />
