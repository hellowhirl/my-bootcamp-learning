import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  // in thi smethod we will have the logic for determining the sort order
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    // first check which column we are in, works for in case we keep changing order for same column
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc"; // should always be ascending when sorting on a new column
    }
    // lastly we need to raise the sort event
    this.props.onSort(sortColumn);
  };

  render() {
    // since we are passing movies via props, we are not supposed to modify the props,
    // because actual state is stored in the Movies component
    const { movies, onLike, onDelete } = this.props;
    // onLike and onDelete are function reference
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rating</th>
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
                    // should raise events here and let Movies component like a given movie
                    onClick={() => onLike(movie)}
                  />
                </td>
                <td>
                  <button
                    // should raise events here and let Movies component delete a given movie
                    onClick={() => onDelete(movie)} // to pass an argument we use an arrow function, pass "movie"
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
    );
  }
}

export default MoviesTable;
