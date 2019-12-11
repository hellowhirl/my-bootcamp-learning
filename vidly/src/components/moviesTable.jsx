import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
  // since we are passing movies via props, we are not supposed to modify the props,
  // because actual state is stored in the Movies component
  const { movies, onLike, onDelete } = props;
  // onLike and onDelete are function reference

  return (
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
};

export default MoviesTable;
