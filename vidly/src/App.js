import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    // const movieIndex = this.state.movies.indexOf(movie);
    // this.setState({ movie: this.state.movies.splice(movieIndex, 1) }); // my fitst solution: somehow this worked too?

    // create new array of movies that contains all movies except the movie we have passed here, targetng with '._id' property
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    // should not directly update state, instead should use 'setState' method of component
    // this.setState({ movies: movies }); // this works too, but better implementation is below
    this.setState({ movies }); // in modern JS if key and value are same name we can simplify code by removing repitition, only passing 'movies'
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
    else if (movies[index].liked === true) movies[index].liked = false;
    console.log(movies[index].liked);
    // set the state with new "movies" array, and have React update the state
    this.setState({ movies });
  };

  render() {
    return (
      <main className="container">
        <h1>Vidly</h1>
        <Movies
          movies={this.state.movies}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
      </main>
    );
  }
}

export default App;
