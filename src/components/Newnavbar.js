import React, { Component } from "react";
import { Link } from "react-scroll";
////////////////////////////////////////////
import PropTypes from "prop-types";
import { withRouter } from "react-router";
////////////////////////////////////////////
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    // const home = document.getElementById("main-nav");
    // home.classList.add("underline");

    console.log("this.props.home: ", this.props);
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;

      // let theHash = window.location.hash;
      //
      // const home = document.getElementById("main-nav");
      // const about = document.getElementById("about-nav");
      // const projects = document.getElementById("projects-nav");
      // const contact = document.getElementById("contact-nav");
      //
      // if (theHash === "#main") {
      //   home.classList.add("underline");
      //   about.classList.remove("underline");
      //   projects.classList.remove("underline");
      //   contact.classList.remove("underline");
      // } else if (theHash === "#about") {
      //   about.classList.add("underline");
      // } else if (theHash === "#projects") {
      //   projects.classList.add("underline");
      // } else {
      //   contact.classList.add("underline");
      // }

      // console.log("theHash:", theHash);
      // console.log("home", home);

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
      // console.log("isTop", isTop);
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
            activeClass="underline"
            to="main"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li
              id="main-nav"
              className={this.props.hash === "home" && "underline"}
            >
              HOME
            </li>
          </Link>
          <Link
            activeClass="underline"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li
              id="about-nav"
              className={this.props.hash === "about" && "underline"}
            >
              ABOUT
            </li>
          </Link>
          <Link
            activeClass="underline"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li
              id="projects-nav"
              className={this.props.hash === "projects" && "underline"}
            >
              PROJECTS
            </li>
          </Link>
          <Link
            activeClass="underline"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <li
              id="contact-nav"
              className={this.props.hash === "contact" && "underline"}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;

// <div className="nav-wrapper"></div>;
// <div className="portfolio">PORTFOLIO</div>
