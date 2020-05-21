import React, { Component } from "react";

export class addData extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="Title">Add User</div>
          <div className="content">
            <label>Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <br />
            <label>Email:</label>
            <br />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default addData;
