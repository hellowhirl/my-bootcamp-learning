import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

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
    const { data } = this.state;
    await login(data.username, data.password);
    // if this request is successful then we can see the body of Response in dev tools Network tab
    // it will be our JSON web token
  };

  render() {
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
