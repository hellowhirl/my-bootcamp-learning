import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ currentGenre: genre.name });
  };

  render() {
    // object destructuring
    const { length: moviesCount } = this.state.movies; // refactoring this number into a separate constant - give it alias of "moviesCount"
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (moviesCount === 0) return <p>There are no movies in the database</p>;

    // determine which movies to show after we run our paginate() method
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {/* for returning multiple elements we should wrap with a parent like 'div */}
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
              movies.map(movie => {
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
          <Pagination
            itemsCount={moviesCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
