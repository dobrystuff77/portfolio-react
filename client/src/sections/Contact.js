import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { emptyFields: false };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  closeEmpty() {
    console.log("this.state.emptyFields: ", this.state.emptyFields);
    this.setState({ emptyFields: false });
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
        {this.state.emptyFields && (
          <>
            EMPTY FIELDS<div onClick={() => this.closeEmpty()}>X</div>
          </>
        )}
        <input
          name="name"
          onChange={e => this.handleChange(e)}
          placeholder="name"
        />
        <br />
        <input
          name="email"
          onChange={e => this.handleChange(e)}
          placeholder="your email"
        />
        <br />
        <input
          name="subject"
          onChange={e => this.handleChange(e)}
          placeholder="subject"
        />
        <br />
        <textarea
          name="message"
          onChange={e => this.handleChange(e)}
          placeholder="message"
        />
        <br />
        <button onClick={() => this.submit()}>Jo send a message</button>
      </div>
    );
  }
}

export default Contact;
