import React from "react";

const MovieForm = ({ match, history }) => {
  console.log(history);
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        // .push() method pushes a new entry onto the history stack
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
