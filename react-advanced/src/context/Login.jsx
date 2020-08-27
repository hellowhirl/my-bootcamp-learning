import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  // in this component we want to call the handleLoggedIn method that we passed from our ContextApp component,
  // which is the property we named as onLoggedIn
  const userContext = useContext(UserContext);

  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("whatever username is")}>
        Login
      </button>
    </div>
  );
}

export default Login;
