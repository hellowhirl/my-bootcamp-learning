import React, { Component } from "react";
import Like from "./like";

class Movies extends Component {
  render() {
    // object destructuring
    const { length: moviesCount } = this.props.movies; // refactoring this number into a separate constant - give it alias of "moviesCount"
    const { onLike } = this.props;

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
            this.props.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <Like liked={movie.liked} movie={movie} onLike={onLike} />
                  <td>
                    <button
                      onClick={() => this.props.onDelete(movie)} // to pass an argument we use an arrow function, pass "movie"
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
