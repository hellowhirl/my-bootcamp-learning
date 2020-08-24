import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Movie</div>
        {this.props.showTooltip && <div>some random tooltip</div>}
      </React.Fragment>
    );
  }
}

// instead of just exporting our Movie class, here we wrap it with our higher order component function
export default withTooltip(Movie);
