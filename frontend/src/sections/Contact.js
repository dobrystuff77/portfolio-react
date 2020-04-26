import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      message: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.last]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value
    });
    console.log(this.state);
  };

  submitHandler = e => {
    e.preventDefault();
    console.log("in submit handler!!");
    console.log(this.state);

    axios
      .post("/message", this.state)
      .then(({ data }) => {
        console.log("axios in post message!!!!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="contact-section" id="contact">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="first"
            placeholder="name"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="last"
            placeholder="last name"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.changeHandler}
          />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            styles={{ margin: "0px" }}
            onChange={this.changeHandler}
          />
          <button
            styles={{ color: "black" }}
            type="submit"
            onClick={this.submitHandler}
          >
            Pres mE
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
