import React, { Component } from "react";
import axios from "axios";

import Aeroplane from "./images/aeroplane.svg";
import Linkedin from "./images/linkedin3.svg";
import Git from "./images/github3.svg";
import Loading from "./images/loading.gif";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      email: "",
      message: "",
      text: "Contact me!",
      lading: true
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async submit() {
    this.setState({ loading: true, text: "Sending!" });

    if (
      this.state.first === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({ text: "Empty fields!" });
      return;
    }

    try {
      await axios.post(
        "https://0a9q48fjej.execute-api.eu-west-1.amazonaws.com/production/contact-form",
        {
          first: this.state.first,
          email: this.state.email,
          message: this.state.message
        }
      );

      this.setState({
        first: "",
        email: "",
        message: "",
        loading: false,
        text: "Message sent!"
      });
    } catch (e) {
      console.log("error in send email: ", e);
      this.setState({
        loading: false,
        text: "Something went wrong!"
      });
    }
  }

  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="aeroplane-div">
          <img src={Aeroplane} className="aeroplane" alt="aeroplane" />
        </div>
        <div className="title-contact">{this.state.text}</div>
        <div className="sending-container">
          {!this.state.loading ? (
            <>
              <input
                name="first"
                onChange={e => this.handleChange(e)}
                placeholder="name"
                className="contact-input"
                value={this.state.first}
              />
              <input
                name="email"
                onChange={e => this.handleChange(e)}
                placeholder="your contact"
                className="contact-input"
                value={this.state.email}
              />
              <textarea
                name="message"
                onChange={e => this.handleChange(e)}
                placeholder="message"
                className="textarea-contact"
                value={this.state.message}
              />
              <button onClick={() => this.submit()} className="button">
                Send a message
              </button>
            </>
          ) : (
            <>
              <img src={Loading} alt="loading icon" />
            </>
          )}
        </div>
        <div className="contact-icons">
          <div className="contact-icon-div">
            <a
              href="https://www.linkedin.com/in/adrian-wysocki-42a3171a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkedin}
                className="contact-icon"
                alt="linkedin-icon"
              />
            </a>
          </div>
          <div className="contact-icon-div">
            <a
              href="https://github.com/dobrystuff77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Git} className="contact-icon" alt="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
