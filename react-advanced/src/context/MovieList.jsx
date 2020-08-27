import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context); // with this we can make decisions in application based on current user
  }

  render() {
    return (
      <UserContext.Consumer>
        {(valueOrAnything) => <div>Movie List: {valueOrAnything.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;
