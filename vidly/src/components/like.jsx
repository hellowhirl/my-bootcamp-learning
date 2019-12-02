import React, { Component } from "react";

class Like extends Component {
  handleLike() {
    console.log(this);
  }

  render() {
    return (
      <React.Fragment>
        <td onClick={() => this.handleLike()}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </td>
      </React.Fragment>
    );
  }
}

export default Like;
