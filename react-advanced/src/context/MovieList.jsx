import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context); // with this we can make decisions in application based on current user
  }

  render() {
    return (
      <UserContext.Consumer>
        {(valueOrAnything) => (
          <div>
            Movie List:{" "}
            {valueOrAnything.currentUser // check to see if "currentUser" is null or not
              ? valueOrAnything.currentUser.name // changing structure of Context object here
              : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; // an alternative way to pass context outside of render method

export default MovieList;
