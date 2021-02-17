import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", console.log("hash changed!"), false);

    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
    window.removeEventListener(
      "hashchange",
      console.log("unmount hash changed!"),
      false
    );
  }

  render() {
    return (
      <div
        className={this.state.scrolled ? "navbar navbar-scrolled" : "navbar"}
        id="navbar"
      >
        <ul>
          <li id="main-nav">
            <Link
              activeClass="underline"
              to="main"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              HOME
            </Link>
          </li>

          <li id="about-nav">
            <Link
              activeClass="underline"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li id="projects-nav">
            <Link
              activeClass="underline"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li id="contact-nav">
            <Link
              activeClass="underline"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
