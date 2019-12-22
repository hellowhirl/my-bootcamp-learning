import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  // accessing a DOM element in React: defining a property for 'ref' by creating a ref object
  //   username = React.createRef();

  state = {
    account: { username: "", password: "" },
    // the properties in 'error' object map to the name of our input fields
    errors: {}
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    // give each field a 'name' property for bracket notation
    account[input.name] = input.value;
    this.setState({ account });
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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
