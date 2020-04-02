import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  // accessing a DOM element in React: defining a property for 'ref' by creating a ref object
  //   username = React.createRef();

  state = {
    // should initialize the properties of our state object with an empty string or value that we get from the server
    data: { username: "", password: "" },
    // the properties in 'error' object map to the name of our input fields
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Usernmae"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // better approach is to use the 'autoFocus' attribute
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password); // at this point we should store JWT on the client
      // with this we can the value of the jwt in the body of the response
      // console.log(jwt);
      // localStorage.setItem("token", jwt); // refactor: we move this line into authService.js

      // this.props.history.push("/"); // to make this process complete, navigate user back to homepage
      // in order to call cdm() on App.js we need to do full reload of entire application
      // so instead of just redirecting the user to homepage we will use the 'window' object in the browser

      const { state } = this.props.location; // this 'location' might have a 'state' property
      window.location = state ? state.from.pathname : "/"; // if state is defined then set url to that 'location.pathname', otherwise "/"
      // what happens after the user is logged in is not the responsibility of the login function

      // if this request is successful then we can see the body of Response in dev tools Network tab
      // it will be our JSON web token
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "custom error message for invalid email or password";
        // errors.username = ex.response.data; // OR this error we get from the server
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />; // to prevent user from accessing Login page, despite already being logged in
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
