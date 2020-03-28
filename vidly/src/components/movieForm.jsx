import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveMovie, getMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

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

  async populateGenres() {
    // get genres from movieService and then update the state
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    // better to move everything within the 'try' block so 'try' starts at beginning of method
    try {
      // if movie is not new then get the movie with given id - and check to see if that movie exists
      const movieId = this.props.match.params.id; // read the 'id' parameter in the route and store in a constant
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        // here we are at end of this method so we don't need 'return' keyword
        // return this.props.history.replace("/not-found");
        return this.props.history.replace("/not-found");
    }
  }

  // now our code is telling a story:
  // whenever a component mounts there are 2 things that should happen
  // the details of these methods are somewhere else - not poluting cdm
  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }
  // update the state - but not to movie object we got on server
  // the restful API's that we have on the server are general purpose - not built for a specific page
  // what we display on the page is different from the structure of data on the server

  // here we get use 'movie' object that we get from server and map it to a 'movie' object we can use on this form
  // this method refers to a model with a view
  mapToViewModel = movie => {
    // debugger;
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
