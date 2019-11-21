import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      // render this array of objects using .map() method
      { id: 1, value: 5 },
      { id: 2, value: 6 },
      { id: 3, value: 7 },
      { id: 4, value: 8 }
    ]
  };

  handleDelete = counterID => {
    // "The component that owns a piece of the state, should be the one modifying it"
    // here we will handle event from <Counter/>
    console.log("Event Handler called", counterID);
    const counters = this.state.counters.filter(m => m.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleIncrement = counter => {
    // create a new "counters" array, clone exact same array of objects that we have in the state object
    const counters = [...this.state.counters];
    // mark index for "counter" that we receive as a parameter
    const index = counters.indexOf(counter);
    // clone "counter" at given location so we'll have different object than the one in the state
    counters[index] = { ...counter };
    // increment "value" by 1 to value property only for given location (counters[index])
    counters[index].value++;
    // set the state with new "counters" array, and have React update the state
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="reset btn-primary btn-md">
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={
              // here we are passing reference to delete method via props to <Counter/>
              this.handleDelete
            }
            onIncrement={this.handleIncrement}
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
