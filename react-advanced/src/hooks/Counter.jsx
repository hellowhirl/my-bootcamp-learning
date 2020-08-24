import React, { useState, Fragment } from "react";

function Counter(props) {
  const [count, setCount] = useState(0); // 0 is initial value for "count" variable
  // rewrite below with array destructuring
  //   const array = useState(0); // returns an array with 2 items; we store in a constant
  //   const count = array[0]; // equivalent to this.state.count
  //   const setCount = array[1]; // 2nd item is a function for updating the value
  const [name, setName] = useState("");

  return (
    <Fragment>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <div>
        {name} clicked Counter {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
