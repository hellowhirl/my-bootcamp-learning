import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode"; // this module exports a deafult function, which we can name as anything
// Good practice to have some organization in our import statements - above modules are 3rd party libraries
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
// Above are components from our application, below are our CSS modules
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token"); // return a JSON web token
      const user = jwtDecode(jwt); // if we pass null, "empty string", or invalid JSON token then we'll get an exception
      // console.log(user);
      this.setState({ user });
    } catch (ex) {
      // we ignore, because this is not an application error
      // this is only for the case when there is no Jwt in local storage (i.e an anonymous user)
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            {/* for MovieForm we are using route parameter (match.params) */}
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
