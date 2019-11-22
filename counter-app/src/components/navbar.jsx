import React, { Component } from "react";

// Refactored from Class to Stateless Functional Component
// both are OK, but depends on personal preference

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - output is rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {
            // 'this.props' only works in class components
            // in functional compoennts we need to add 'props' as a parameter to pass
            totalCounters
          }
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
