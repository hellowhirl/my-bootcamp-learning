import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext); // rename to "userContext" to avoid duplicate currentUser.currentUser

  console.log("context from Movie Row:", userContext);

  return (
    <div>
      Movie Row: {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
