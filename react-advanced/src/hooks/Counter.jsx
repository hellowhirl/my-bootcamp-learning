import React, { useState, Fragment, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0); // 0 is initial value for "count" variable
  // rewrite below with array destructuring
  //   const array = useState(0); // returns an array with 2 items; we store in a constant
  //   const count = array[0]; // equivalent to this.state.count
  //   const setCount = array[1]; // 2nd item is a function for updating the value
  const [name, setName] = useState("");

  // all logic for below lifecycle methods will end up in a single place
  // componentDidMount (first render)
  // componentDidUpdate (rerenders or when we get new data based on changes to state and props objects)

  useEffect(() => {
    // document.title = `${name} has clicked ${count} times`;

    // componentWillUnmount lifecycle methods will up in this return function; we can put our cleanup code in here
    return () => {
      console.log("Main - Clean up");
    };
  }, [count]); // sometime we may want to do only update based on depending on certain dependencies for performance reasons
  // otherwise it will get called every time our component gets rerendered

  // if there is some trouble with below logic now there is a single place to make necessary changes
  useDocumentTitle(`${name} has clicked ${count} times`); // how we pass our custom title

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
