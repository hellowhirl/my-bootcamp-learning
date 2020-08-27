import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext); // rename to "userContext" to avoid duplicate currentUser.currentUser
  const cartContext = useContext(CartContext);

  console.log("context from Movie Row:", userContext);
  console.log("cart context:", cartContext);

  return (
    <div>
      Movie Row: {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
