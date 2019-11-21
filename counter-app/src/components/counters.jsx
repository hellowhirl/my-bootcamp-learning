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

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="reset btn-primary btn-md">
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} // 'key' does not appear in 'this.props' because it is a special attribute for identifying elements
            // 'key' is used internally by React and is not accesible in component
            // value={counter.value}
            selected={true}
            trueAsDefault // if we exclude value here then by default it will be set to 'true'
            // id={counter.id}
            onDelete={
              // here we are passing reference to delete method via props to <Counter/>
              this.handleDelete
            }
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
