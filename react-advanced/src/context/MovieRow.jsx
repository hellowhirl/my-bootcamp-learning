import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext);

  console.log("context from Movie Row:", currentUser);

  return <div>Movie Row: {currentUser.name}</div>;
}

export default MovieRow;
