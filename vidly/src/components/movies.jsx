import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
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
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    // object destructuring
    const { length: moviesCount } = this.state.movies; // refactoring this number into a separate constant - give it alias of "moviesCount"

    if (moviesCount === 0) return <p>There are no movies in the database</p>;
    return (
      <React.Fragment>
        {/* for returning multiple elements we should wrap with a parent like 'React.Fragment */}
        <p>Showing {moviesCount} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {// for rendering list of movies
            // every time we use map method we need to set 'key' attribute for the element that we are repeating
            this.state.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)} // to pass an argument we use an arrow function, pass "movie"
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
