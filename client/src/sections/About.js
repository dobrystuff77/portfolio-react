import React, { Component } from "react";
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
import { Link } from "react-scroll";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <div className="title">Hi, I’m Adrian. Nice to meet you.</div>
        <div className="short-note">
          Since beginning my journey as a student of SPICED Academy on November
          2019, programming became my real passion right next to the jazz music.
          After boot camp I've done a lot of courses creating full stack
          projects and improving my skills. The more I know about programming,
          the more I feel the need to learn. I'm naturally curious, open minded
          and I love to work in a team. I am looking for a Junior Full Stack Web
          Developer position in Berlin. If you have any questions or suggestions
          feel free to &nbsp;
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
