import React, { Component } from "react";

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
          and I love to work in a team :)
        </div>
      </div>
    );
  }
}

export default About;
