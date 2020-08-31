import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";
import CartContext from "./context/cartContext";

// demonstrating context in class components and functional components
class ContextApp extends Component {
  state = { currentUser: null };

  handleLoggedIn = (username) => {
    console.log("getting the user:" + username);
    const user = { name: "Near" }; // this is just example case where we would get username from the server
    this.setState({ currentUser: user });
  };

  render() {
    return (
      // passing down state in this component through value prop, that has 2 properties
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          // the moment the state is updated then "currentUser" in this value prop will also be updated
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default ContextApp;
