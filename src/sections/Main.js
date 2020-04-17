import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-scroll";
import Typed from "react-typed";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
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
        <div className="main-text">
          <h2>Junior Fullstack Web Developer</h2>
          <p>Programmer with background in jazz musik, and passion for code!</p>
        </div>
      </div>
    );
  }
}

export default Main;
//
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
