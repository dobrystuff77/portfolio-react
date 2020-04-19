import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
      console.log("isTop", isTop);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div
        className={this.state.scrolled ? "navbar navbar-scrolled" : "navbar"}
        id="navbar"
      >
        <ul>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li>HOME</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li>PROJECTS</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;

// <div className="nav-wrapper"></div>;
// <div className="portfolio">PORTFOLIO</div>
