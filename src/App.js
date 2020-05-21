import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://node-mailtrain.herokuapp.com/adduser", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("HEre " + err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="Layout">
          <div className="container">
            <div className="Title">Add User</div>

            <form onSubmit={this.submitHandler}>
              <div className="content">
                <label>Name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <label>Email:</label>
                <br />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.changeHandler}
                  required
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
