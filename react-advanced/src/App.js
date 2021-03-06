import React from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";

// demonstrating higher order components and hooks
function App() {
  return (
    <React.Fragment>
      <Movie id={1} />
      <Counter />
      <Users />
    </React.Fragment>
  );
}

export default App;
