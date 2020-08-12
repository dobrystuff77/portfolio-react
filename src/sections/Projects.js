import React, { Component } from "react";
import data from "./data.json";
import ArrowBack from "./images/arrow-back.svg";
import Www from "./images/www.svg";
import Git from "./images/github.svg";

import { Link } from "react-scroll";
// console.log("data: ", data);

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: data.projects,
      project: false,
      index: null
    };
  }

  project(index) {
    console.log("click project");
    console.log("index:", index);
    this.setState({
      project: true,
      index: index
    });

    console.log("this.state: ", this.state);
    console.log("this.state.project ", this.state.project);
    console.log("this.state.projectPath ", this.state.projectPath);
  }

  noProject() {
    this.setState({
      project: false
    });
    console.log("this.state.project ", this.state.project);
  }

  render() {
    console.log("data: ", data);
    console.log("this.state.index: ", this.state.index);
    return (
      <div className="projects-section" id="projects">
        {!this.state.project && (
          <>
            <div className="projects-container">
              <div className="title">My recent work:</div>
              {this.state.projects.map((project, index) => {
                return (
                  <div className="project-div" key={index}>
                    <img
                      className="project-picture"
                      src={window.location.origin + project.main_image}
                      alt={project.title}
                    />
                    <div className="cover">
                      <div className="title">{project.title}</div>
                      {project.short_desc}
                      <div className="buttons">
                        <Link
                          to="projects"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                        >
                          <div
                            className="button"
                            onClick={() => this.project(index)}
                          >
                            Description
                          </div>
                        </Link>

                        <a
                          href={project.live_page}
                          className="page-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="button">Visit Website</div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {this.state.project && (
          <>
            <div className="project-container">
              <div className="title">
                {this.state.projects[this.state.index].title}
                <div className="back-to">
                  <img
                    src={ArrowBack}
                    className="arrow-back"
                    alt="arrow-back"
                    onClick={() => this.noProject()}
                  />
                </div>
              </div>
              <div className="short-desc">
                {this.state.projects[this.state.index].short_desc}
              </div>
              <div className="links">
                <a
                  href={this.state.projects[this.state.index].live_page}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-center">
                    <img src={Www} alt="www icon" className="link-icon" />
                    <div className="link-tekst"> View Website</div>
                  </div>
                </a>
                <a
                  href={this.state.projects[this.state.index].git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-center">
                    <div>
                      <img src={Git} alt="www icon" className="link-icon" />
                    </div>
                    <div> See on GitHub</div>
                  </div>
                </a>
              </div>
              {this.state.projects[this.state.index].long_desc && (
                <div className="long-desc">
                  {this.state.projects[this.state.index].long_desc}
                </div>
              )}
              {this.state.projects[this.state.index].desc.map(
                (paragraph, index) => {
                  return (
                    <div className="desc-container">
                      <div className="desc-title">{paragraph.title}</div>
                      <div className="paragraph-text">{paragraph.text}</div>

                      {paragraph.image && (
                        <>
                          <a
                            href={window.location.origin + paragraph.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "underline" }}
                          >
                            <div className="project-pic-div">
                              <img
                                src={window.location.origin + paragraph.image}
                                alt={paragraph.title}
                                className="project-pic"
                              />
                            </div>
                          </a>
                        </>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Projects;
