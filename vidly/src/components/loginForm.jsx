import React, { Component } from "react";

class LoginForm extends Component {
  // accessing a DOM element in React: defining a property for 'ref' by creating a ref object
  username = React.createRef();

  state = {
    account: { username: "", password: "" }
  };

  // better approach is to use 'autoFocus'
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server --> save the changes --> redirect user to different page
    // const username = document.getElementById('username').nodeValue; // this is the plain JS approach

    // if you really need to access the DOM, this is the way to do it
    // should not over use this method
    const username = this.username.current.value;
    console.log("submitted");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus // this solution is better for giving input field focus
              onChange={this.handleChange}
              ref={this.username}
              id="username"
              value={this.state.account.username} // this input field will no longer have its own state - using props to set its value
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
