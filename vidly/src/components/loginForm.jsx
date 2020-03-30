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
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.username, data.password); // at this point we should store JWT on the client
      // with this we can the value of the jwt in the body of the response
      // console.log(jwt);
      localStorage.setItem("token", jwt);
      this.props.history.push("/"); // to make this process complete, navigate user back to homepage

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
