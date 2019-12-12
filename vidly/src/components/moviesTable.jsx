import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class MoviesTable extends Component {
  // in thi smethod we will have the logic for determining the sort order

  // initializing 'columns' here - a simple property is sufficient
  // doesn't have to be a part of the state - will not change throughout life cycle of this component
  columns = [
    { path: "title", title: "Title" },
    { path: "genre.name", title: "Genre" },
    { path: "numberInStock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    // since we are passing movies via props, we are not supposed to modify the props,
    // because actual state is stored in the Movies component
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    // onLike and onDelete are function reference
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
