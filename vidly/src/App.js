import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Vidly</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
