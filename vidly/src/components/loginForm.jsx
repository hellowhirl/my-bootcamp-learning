import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  // accessing a DOM element in React: defining a property for 'ref' by creating a ref object
  //   username = React.createRef();

  state = {
    account: { username: "", password: "" },
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

  validate = () => {
    const options = { abortEarly: false }; // our 3rd argument - code becomes more expressive
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    // one approach to map an array into an object
    // also able to use .map() or .reduce()
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // better approach is to use 'autoFocus'
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server --> save the changes --> redirect user to different page
    // const username = document.getElementById('username').nodeValue; // this is the plain JS approach

    // if you really need to access the DOM, this is the way to do it
    // should not over use this method
    // const username = this.username.current.value;
    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // what ever 'name' is used at runtime, that will be used to set the key
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema); // no need for 3rd argument, we don't want to abort early

    // ternary operator below 2 lines:
    // if (error) return null;
    // return error.details[0].message;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    // live validation after onChange event is triggered
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    // if no error message then we should delete the existing property so the error is cleared up
    else delete errors[input.name];

    const account = { ...this.state.account };
    // give each field a 'name' property for bracket notation
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
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
