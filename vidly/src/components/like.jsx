import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Like extends Component {
  state = {
    movies: getMovies()
  };

  display() {
    if (this.props.liked)
      return <i className="fa fa-heart" aria-hidden="true"></i>;
    return <i className="fa fa-heart-o" aria-hidden="true"></i>;
  }

  render() {
    return (
      <React.Fragment>
        <td onClick={() => this.props.onLike(this.props.movie)}>
          {this.display()}
        </td>
      </React.Fragment>
    );
  }
}

export default Like;
