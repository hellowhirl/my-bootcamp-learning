import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 6 },
      { id: 3, value: 7 },
      { id: 4, value: 8 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            trueAsDefault
          />
        ))}
      </div>
    );
  }
}

export default Counters;
