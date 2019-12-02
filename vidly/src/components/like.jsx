import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Like extends Component {
  state = {
    movies: getMovies()
  };

  handleLike = movie => {
    // console.log(movie);
    // create a new "counters" array, clone exact same array of objects that we have in the state object
    const movies = [...this.state.movies];
    // mark index for "counter" that we receive as a parameter
    const index = movies.indexOf(movie);
    // clone "counter" at given location so we'll have different object than the one in the state
    movies[index] = { ...movie };
    // increment "value" by 1 to value property only for given location (movies[index])
    console.log(movies[index].liked);
    if (movies[index].liked === false) movies[index].liked = true;
    console.log(movies[index].liked);
    // set the state with new "movies" array, and have React update the state
    this.setState({ movies });
  };

  display() {
    if (this.props.liked)
      return <i className="fa fa-heart" aria-hidden="true"></i>;
    return <i className="fa fa-heart-o" aria-hidden="true"></i>;
  }

  render() {
    const liked = this.props.liked;
    // console.log(liked);
    return (
      <React.Fragment>
        <td onClick={() => this.handleLike(this.props.movie)}>
          {this.display()}
        </td>
      </React.Fragment>
    );
  }
}

export default Like;
