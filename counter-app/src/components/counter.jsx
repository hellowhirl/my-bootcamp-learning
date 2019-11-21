import React, { Component } from "react";

// Counter class inherits methods from Component class
class Counter extends Component {
  // defining properties in a class: setting them = to an object
  // this state object includes any data that this component needs
  state = {
    // here we are using 'props' to initialize the 'state'
    value: this.props.counter.value,
    // state properties will be merged or overwritten by 'setState'
    // rename "count" to "value" to be more consistent with the property that we are setting from the outside
    // it's more meaningful to say the "counter" has a "value"
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // convention used for click handles is to name method starting with "handle___"
  handleIncrement2() {
    console.log("increment logged", this);
  }

  // experimental way to bind event handlers (set 'this') - if this breaks later then do tried and true constructor approach
  // arrow functions don't rebind the 'this' keyword, they inherit it
  // set a method to an arrow function by using '=' operator
  handleIncrement = product => {
    // here we are able to pass arguments with our event - here we are passing the id of a product
    console.log(product);
    // 'setState' method tells React to update the state - syncs DOM with vDOM
    this.setState({ value: this.state.value + 1 }); // we pass an object, and the property we set is same as in state, or new props
  };

  //   doHandleIncrement = () => {
  //     // writiing code like this is messy - dont' want to write a wrapper method for antoher event handler
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("props", this.props); // 'key' does not appear in 'this.props' because it is a special attribute
    // below code was refactored into getBadgeClasses() method - to render a className dynamically
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    // importing 'React' React.createElement is happening behind the scenes - which helps compile elements
    // "JSX expressions must have one parent element." - which is why standard approach is <div></div>
    // React.createElement('') takes a single argument for type of element we want to create - multiple side by side is not possible
    return (
      // use 'React.Fragment' if we don't want an extra <div> on outside layer - a child from React called 'Fragment'
      // in between {} we can write any JS expression - something that produces a value
      // this.state.count is how we access dynamic property values
      <div>
        {this.props.children}
        {
          // there are times when we want to pass complex elements to a child componenet (like dialogue box)
          // also possible to achieve passing 'passing childrem' effect with below code
        }
        <h5>Counter # {this.props.id}</h5>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //   onClick={this.handleIncrement} // not calling the method but simply passing a reference to it (unlike in vanilla JS)
          onClick={() => this.handleIncrement({ id: 1 })} // use inline function here: whenever you need to pass an argument through event handlers, pass an arrow function, in body of function call the event handler, and pass an argument
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          style={this.styles}
          className="btn btn-danger btn-sm m-2"
          onClick={
            // here we raise the event with name of our prop: 'onDelete'
            () => this.props.onDelete(this.props.counter.id)
          }
        >
          Delete
        </button>
      </div>
    ); // automatic semicolon insertion for 'return' on one line - so we should put parenthesis after return ()
  }

  // best not polute render method, so instead we encapsulate code into separate method
  // always use descriptive names that determine the intention of the code
  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // includes all the classes that we pass to className
    classes += this.state.value === 0 ? "warning" : "primary"; // if(conditon) then append String a, else append String b
    return classes;
  }

  formatCount() {
    // const x = <h1>Example</h1>; // able to define a constant and set it to a JSX expression - perfectly fine
    const { value: count } = this.state;
    // return this.state.count === 0 ? "empty" : this.state.count; // this.state.count is repeated - best to use object destrcturing
    // JSX expressions gets compiled to React elements - JSX expressions are just like normal JS objects
    return count === 0 ? <span>Zero</span> : count; // this.state.count is repeated - best to use object destrcturing
  }
}

// code generated by template below - also OK to use
export default Counter;
