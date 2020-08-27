import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(valueOrAnything) => <div>Movie List: {valueOrAnything.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
