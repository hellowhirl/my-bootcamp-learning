import React from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";

function App() {
  return (
    <React.Fragment>
      <Movie id={1} />
      <Counter />
    </React.Fragment>
  );
}

export default App;
