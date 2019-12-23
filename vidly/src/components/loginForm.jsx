import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  // accessing a DOM element in React: defining a property for 'ref' by creating a ref object
  //   username = React.createRef();

  state = {
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

  // better approach is to use 'autoFocus'
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
