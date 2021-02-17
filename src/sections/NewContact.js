import React, { Component } from "react";
import axios from "axios";
import Aeroplane from "./images/aeroplane.svg";
import Linkedin from "./images/linkedin3.svg";
import Git from "./images/github3.svg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    await axios.post(
      "https://zy599cjdwc.execute-api.eu-west-1.amazonaws.com/default/serverlessAppFunction",
      { key1: `${name}, ${message}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default Contact;
///
