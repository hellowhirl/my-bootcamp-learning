import React from "react";
import { Link } from "react-router-dom";

const MovieContent = props => {
  console.log(props);
  return (
    <div>
      <h1>Movie Form {props.match.params[0]}</h1>
      <Link to="/movies" className="btn btn-primary">
        Save
      </Link>
    </div>
  );
};

export default MovieContent;
