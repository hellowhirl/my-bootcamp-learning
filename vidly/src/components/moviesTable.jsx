import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
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
    {
      key: "like",
      // here we set 'content' to a function (instead of React element) that takes a parameter like 'movie' and returns a React element
      content: movie => (
        <Like
          liked={movie.liked}
          // should raise events here and let Movies component like a given movie
          onClick={() => this.props.onLike(movie)}
        />
      )
    },
    {
      key: "delete",
      // here we set 'content' to a function (instead of React element) that takes a parameter like 'movie' and returns a React element
      content: movie => (
        <button
          // should raise events here and let Movies component delete a given movie
          onClick={() => this.props.onDelete(movie)} // to pass an argument we use an arrow function, pass "movie"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    // since we are passing movies via props, we are not supposed to modify the props,
    // because actual state is stored in the Movies component
    const { movies, onSort, sortColumn } = this.props;
    // onLike and onDelete are function reference
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        {/* Here we want to be decoupled from movies - it knows nothing about movies */}
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
