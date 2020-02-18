import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
// import TableHeader from "./common/tableHeader";
// import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
  // in this method we will have the logic for determining the sort order

  // initializing 'columns' here - a simple property is sufficient
  // doesn't have to be a part of the state - will not change throughout life cycle of this component
  // our implementation is very specific to movies based on the way we define 'columns' here
  columns = [
    {
      path: "title",
      title: "Title",
      // here we set 'content' to a function (instead of React element) that takes a parameter like 'movie' and returns a React element
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
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
      // this is a reusable able component - MoviesTable component is wrapping around Table
      // Talbe has all the data that it needs from MovieTable
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
