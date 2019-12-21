import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [], // initialize these properties to empty array because in real world application it will take some time to get the data from the server - so just making sure these properties are not 'undefined'
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
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
    // const currentGnnre = [...this.state.selectedGenre];
    // currentGnnre.name = genre;

    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    // with this new method we need some properties from the state object
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // determine which movies to show after we run our paginate() method
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    // object destructuring
    const { length: moviesCount } = this.state.movies; // refactoring this number into a separate constant - give it alias of "moviesCount"
    const { pageSize, currentPage, sortColumn } = this.state;

    if (moviesCount === 0) return <p>There are no movies in the database</p>;

    // we can use object destructuring here as well to extract the properties that we need from the method
    const { totalCount, data: movies } = this.getPageData();

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            {/* for returning multiple elements we should wrap with a parent like 'div */}
            <p>Showing {totalCount} movies in the database</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
