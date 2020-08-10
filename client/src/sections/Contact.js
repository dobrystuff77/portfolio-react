import React, { Component } from "react";
import axios from "axios";
import Aeroplane from "./images/aeroplane.svg";
import Linkedin from "./images/linkedin3.svg";
import Git from "./images/github3.svg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyFields: false,
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  closeEmpty() {
    console.log("this.state.emptyFields: ", this.state.emptyFields);
    this.setState({
      emptyFields: false
    });
  }

  submit() {
    this.setState({ emptyFields: false });
    console.log("first", this.state.name);
    console.log("email", this.state.email);
    console.log("message", this.state.subject);
    console.log("message", this.state.message);

    axios
      .post("/api/message", {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
      .then(data => {
        console.log("res from axios POST/api/message", data.data.data);
        console.log("state!!!!: ", this.state);
        this.setState({ name: "", email: "", subject: "", message: "" });
        if (data.data.data === false) {
          console.log("empty field!!");
          this.setState({ emptyFields: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="aeroplane-div">
          <img src={Aeroplane} className="aeroplane" alt="aeroplane" />
        </div>
        <div className="title-contact">Contact me!</div>

        <div className="empty-div">
          {this.state.emptyFields && (
            <div className="empty-fields">
              <div>EMPTY FIELDS</div>
              <div onClick={() => this.closeEmpty()}>&nbsp;X</div>
            </div>
          )}
        </div>
        <input
          name="name"
          onChange={e => this.handleChange(e)}
          placeholder="name"
          className="contact-input"
          value={this.state.name}
        />

        <input
          name="email"
          onChange={e => this.handleChange(e)}
          placeholder="your email"
          className="contact-input"
          value={this.state.email}
        />
        <input
          name="subject"
          onChange={e => this.handleChange(e)}
          placeholder="subject"
          className="contact-input"
          value={this.state.subject}
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
        <div className="contact-icons">
          <div className="contact-icon-div">
            <img src={Linkedin} className="contact-icon" />
          </div>
          <div className="contact-icon-div">
            <img src={Git} className="contact-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
///
