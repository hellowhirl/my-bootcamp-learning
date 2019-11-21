import React, { Component } from "react";

// Counter class inherits methods from Component class
class Counter extends Component {
  // Here we will make a Controlled Component:
  // remove the local state and only rely on the props to receive the data this component needs
  // find any references to 'this.state' and update them accordingly

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          style={this.styles}
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // includes all the classes that we pass to className
    classes += this.props.counter.value === 0 ? "warning" : "primary"; // if(conditon) then append String a, else append String b
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span>Zero</span> : count; // this.state.count is repeated - best to use object destrcturing
  }
}

export default Counter;
