import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout(); // this is the object-oriented syntax approach
    // logout(); // what happens after user logs out is not the responsibility of this component
    // localStorage.removeItem("token"); // remove line for removing token

    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
