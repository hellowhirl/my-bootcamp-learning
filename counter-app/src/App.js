import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      // render this array of objects using .map() method
      { id: 1, value: 5 },
      { id: 2, value: 6 },
      { id: 3, value: 7 },
      { id: 4, value: 8 }
    ]
  };

  // constructor is called only once when an instance of a class is created
  // this is where we can intialize the properties in that instance
  constructor(props) {
    super(props);
    console.log("App - MOUNTING PHASE - constructor", this.props);
    // common case is to set the state from the props that we receive on the outside - for example:
    // and we will also need to pass 'props' as parameter to this constructor and to constructor of base class - super(props)
    // this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - MOUNTING PHASE - componentDidMount");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    // if (counters[index].value > 0) {
    counters[index].value--;
    this.setState({ counters });
    // }
  };

  handleDelete = counterID => {
    // "The component that owns a piece of the state, should be the one modifying it"
    // here we will handle event from <Counter/>
    // as a result of deleting a <Counter/> the state of <App/> is changed, and entire componenet tree will be rerendered
    console.log("Event Handler called", counterID);
    const counters = this.state.counters.filter(m => m.id !== counterID);
    this.setState({ counters });
  };

  render() {
    console.log("App - MOUNTING PHASE - render");
    // following this all the children will be rendered recursively
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            // filter for only counters with values greater than 0
            this.state.counters.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            // now this Counters componenet is a controlled componenet - has no state, simply receives data and methods to modify data (it is controlled by its parent)
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
