import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./listGroup";
import SearchForm from "./common/searchForm";
import { Link } from "react-router-dom";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import "react-toastify/dist/ReactToastify.css";

class Movies extends Component {
  state = {
    movies: [], // initialize these properties to empty array because in real world application it will take some time to get the data from the server - so just making sure these properties are not 'undefined'
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
    searchWord: ""
  };

  async componentDidMount() {
    const { data: genresList } = await getGenres();
    const genres = [{ name: "All Genres", _id: "" }, ...genresList];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async movie => {
    // const movieIndex = this.state.movies.indexOf(movie);
    // this.setState({ movie: this.state.movies.splice(movieIndex, 1) }); // my fitst solution: somehow this worked too?

    const originalMovies = this.state.movies;
    // create new array of movies that contains all movies except the movie we have passed here, targetng with '._id' property
    const movies = originalMovies.filter(m => m._id !== movie._id);
    // should not directly update state, instead should use 'setState' method of component
    // this.setState({ movies: movies }); // this works too, but better implementation is below
    this.setState({ movies }); // in modern JS if key and value are same name we can simplify code by removing repitition, only passing 'movies'
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      // ????? why doesn't this catch block get activated?
      if (ex.response && ex.response.status === 404)
        toast.error("this movie has already been deleted");

      this.setState({ movies: originalMovies });
    }
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

    this.setState({ selectedGenre: genre, currentPage: 1, searchWord: "" });
  };

  handleSearch = query => {
    // we use an empty string instaed of null because we are dealing with a 'controlled component'
    this.setState({ searchWord: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    // with this new method we need some properties from the state object
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
      searchWord
    } = this.state;

    const searched = allMovies.filter(movie => {
      const returnedMovie = movie.title.toLowerCase();
      const returnedSearch = searchWord.toLowerCase();

      return returnedMovie.includes(returnedSearch);
    });

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : searched;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // determine which movies to show after we run our paginate() method
    const movies = paginate(sorted, currentPage, pageSize);

    // here we are returning an object
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    // object destructuring and give it alias like 'moviesCount'
    const { length: moviesCount } = this.state.movies; // refactoring this number into a separate constant
    const { pageSize, currentPage, sortColumn, searchWord } = this.state;
    const { user } = this.props;

    if (moviesCount === 0) return <p>There are no movies in the database</p>;

    // const result = this.getPagedData();
    // instead fo just storing in a variable like 'result',
    // here we can use object destructuring to extract the properties that we need from the method
    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div>
        <ToastContainer />
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            {/* we are using 'user' object to check if it's truth or falsy to show below Link component */}
            {user && (
              <Link to="movies/new" className="btn btn-primary mb-3">
                New Movie
              </Link>
            )}
            {/* for returning multiple elements we should wrap with a parent like 'div */}
            <p>Showing {totalCount} movies in the database</p>
            {/* here we are using a controlled 'component' */}
            <SearchForm
              value={searchWord}
              propForOnchange={this.handleSearch}
            />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              user={user}
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
