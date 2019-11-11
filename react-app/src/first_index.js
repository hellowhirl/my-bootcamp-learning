import React from "react"; // 'react' is module, and React is object from that module
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
console.log(element); // gives output of JSX expression - a React element

ReactDOM.render(element, document.getElementById("root"));
