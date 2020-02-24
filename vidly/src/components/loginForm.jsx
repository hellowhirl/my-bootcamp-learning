import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

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

  doSubmit = () => {
    // call the server
    console.log("submitted");
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
