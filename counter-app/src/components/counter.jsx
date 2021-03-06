import React, { Component } from "react";

// Counter class inherits methods from Component class
class Counter extends Component {
  // Here we will make a Controlled Component:
  // remove the local state and only rely on the props to receive the data this component needs
  // find any references to 'this.state' and update them accordingly

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - UPDATE - componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Do Ajax call and get new data from server
    }
  }

  // this is called just before an element like <Counter/> is removed from the DOM
  componentWillUnmount() {
    console.log("Counter - UNMOUNT - componentWillUnmount");
  }

  styles = {
    fontSize: 16,
    fontWeight: "bold"
  };

  render() {
    console.log("this.props", this.props);
    console.log("Counter - MOUNTING PHASE - render");
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            style={{ fontSize: 20 }}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={{ fontSize: 20 }}
            // another way to combine string and method in a JSX attribute
            // className={`${this.disableButtonClass()} btn btn-secondary btn-sm m-2`}
            className={"btn btn-secondary btn-sm m-2"}
            // 'disabled' is a boolean attribute - the button becomes unusable/unclickable
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            style={this.styles}
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // includes all the classes that we pass to className
    return (classes += this.props.counter.value === 0 ? "warning" : "primary"); // if(conditon) then append String a, else append String b
  }

  //   disableButtonClass() {
  //     if (this.props.counter.value === 0) return "disabled";
  //   }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span>Zero</span> : count; // this.state.count is repeated - best to use object destrcturing
  }
}

export default Counter;
