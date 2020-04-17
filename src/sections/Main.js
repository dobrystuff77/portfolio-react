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
                value: 110
              }
            }
          }}
        />
        React
        <Typed strings={["Adrian Wysocki"]} typeSpeed={50} />
        <Typed
          strings={["Junior Web Developer"]}
          typeSpeed={80}
          backSpeed={90}
          loop
        />
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
