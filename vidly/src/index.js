import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";

// the expressions that represent an environmental variable are replaced by the actual value of that env variable during build time
// all the env variables that we store directly in the shell or configuration files are extracted and 'process.env.WHATEVER' is replaced with an actual value
console.log(
  "SUPERMAN",
  process.env.REACT_APP_NAME,
  `version: ${process.env.REACT_APP_VERSION}`
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
