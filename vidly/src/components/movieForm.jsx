import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number()
      .required()
      .label("Rate")
      .min(0)
      .max(10)
  };

  componentDidMount() {
    // get genres from fakeMovieService and then update the state
    const genres = getGenres();
    this.setState({ genres });

    // read the 'id' parameter in the route and store in a constant
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    // if movie is not new then get the movie with given id - and check to see if that movie exists
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    // update the state - but not to movie object we got on server
    // the restful API's that we have on the server are general purpose - not built for a specific page
    // what we display on the page is different from the structure of data on the server
    this.setState({ data: this.mapToViewModel(movie) });
  }

  // here we get use 'movie' object that we get from server and map it to a 'movie' object we can use on this form
  // this method refers to a model with a view
  mapToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

  // when form is submitted this method is called
  doSubmit = () => {
    // we pass movie object to method in our fakeMovioeService
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Movie Form</h1>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number In Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default MovieForm;
