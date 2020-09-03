import React, { Component } from "react";
import { Link } from "react-scroll";

import Css from "./images/css.svg";
import Javascript from "./images/javascript.svg";
import Psql from "./images/elephant.png";
import Html from "./images/html.svg";
import ReactIcon from "./images/react.svg";
import Handlebars from "./images/handlebars.svg";
import Jquery from "./images/jquery.svg";
import Vue from "./images/vue.svg";
import Nodejs from "./images/nodejs.svg";
import Github from "./images/github.svg";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <div className="title">Hi, I’m Adrian. Nice to meet you.</div>
        <div className="short-note">
          I can write code as fast and smooth as I can play the saxophone.
          Improvisation is my environment so I feel comfortable in uncomfortable
          situations. Working in a team is like playing in a band - I know how
          to communicate even without words. I am looking for a Junior Web
          Developer position, see my resume or just&nbsp;
          <Link
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <div className="link">contact me</div> &nbsp;:)
          </Link>
          <div className="resume-container">
            <a
              href={window.location.origin + "/AdrianWysockiCV.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resume">RESUME</div>
            </a>
          </div>
        </div>
        <div className="smaller-title">I'm working with:</div>
        <div className="languages-container">
          <div className="language-div">
            <img src={Javascript} alt="css" className="language-icon" />
            <div className="language-name">JavaScript</div>
          </div>
          <div className="language-div">
            <img src={Css} alt="css" className="language-icon" />
            <div className="language-name">CSS</div>
          </div>
          <div className="language-div">
            <img src={Html} alt="css" className="language-icon" />
            <div className="language-name">HTML</div>
          </div>
          <div className="language-div">
            <img src={Nodejs} alt="css" className="language-icon" />
            <div className="language-name">Node.js</div>
          </div>
          <div className="language-div">
            <img src={Psql} alt="css" className="language-icon" />
            <div className="language-name">PostgreSQL</div>
          </div>
          <div className="language-div">
            <img src={ReactIcon} alt="css" className="language-icon" />
            <div className="language-name">React.js</div>
          </div>
          <div className="language-div">
            <img
              src={Handlebars}
              alt="css"
              className="language-icon-handlebars"
            />
            <div className="language-name">Handlebars.js</div>
          </div>
          <div className="language-div">
            <img src={Jquery} alt="css" className="language-icon" />
            <div className="language-name">jQuery</div>
          </div>
          <div className="language-div">
            <img src={Vue} alt="css" className="language-icon-vue" />
            <div className="language-name">Vue.js</div>
          </div>
          <div className="language-div">
            <img src={Github} alt="css" className="language-icon" />
            <div className="language-name">GitHub/Git</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
