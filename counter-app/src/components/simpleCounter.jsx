import React, { Component } from "react";

class SimpleCounter extends Component {
  state = {
    count: 0,
    tags: [] // start by adding new property for making a data list
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>NO TAGS DUDE</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  // unlike in Angular, in JSX there is no if/else (as it's not a templating engine)
  render() {
    return (
      <div>
        <ul>
          {// Condtional Rendering: another way to render content in React
          // this works because of how JS engine handles values being evaluated as 'truthy' - evaluation continues to last operand
          this.state.tags.length === 0 && <p>Please create a new tag</p>}
          {this.renderTags()}
        </ul>
      </div>
    );
  }
}

export default SimpleCounter;
