import React, { Component } from "react";

class SimpleCounter extends Component {
  state = {
    count: 0,
    noTags: [], // start by adding new property for making a data list
    tags: ["tag1", "tag2", "tag3"] // start by adding new property for making a data list
  };

  renderTags() {
    if (this.state.noTags.length === 0) return <p>NO TAGS DUDE</p>;

    return this.state.noTags.map(tag => <li key={tag}>{tag}</li>);
  }

  // unlike in Angular, in JSX there is no if/else (as it's not a templating engine)
  render() {
    return (
      <div>
        <ul>
          {// Condtional Rendering: another way to render content in React
          // this works because of how JS engine handles values being evaluated as 'truthy' - evaluation continues to last operand
          this.state.noTags.length === 0 && <p>Please create a new tag</p>}
          {this.renderTags()}
        </ul>
        <ul>
          <h4>Tags Example:</h4>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li> // getting each item and mapping it to a list item - rendering tag dynamically with { tag }
            // React needs to uniquuely identify each item in this list to track changes between DOM and virtual DOM
            // common to use same name of item that is iterated, or sometimes property of object like 'tag.id'
          ))}
        </ul>
      </div>
    );
  }
}

export default SimpleCounter;
