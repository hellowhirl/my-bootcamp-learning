import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class ContextApp extends Component {
  state = { currentUser: { name: "Melo" } };

  render() {
    return (
      // passing down state in this component through value prop
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default ContextApp;
