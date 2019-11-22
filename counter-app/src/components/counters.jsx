import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // for object destructuring we can define a constant and pick properties of props object that we want to use
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={
            // change to property name that we set on the props object
            onReset
          }
          className="reset btn-primary btn-md"
        >
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={
              // here we are passing reference to delete method via props to <Counter/>
              onDelete
            }
            onIncrement={onIncrement}
            counter={
              // instead of setting 'value' and 'counter' properites seperately, we could simply pass 'counter' object itself, which contains all the data about a counter - just make sure to make appropriate changes in <Counter/>. For example: this.props.value => this.props.counter.value
              counter
            }
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
