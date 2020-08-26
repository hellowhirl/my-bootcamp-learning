import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]); // list of users initial value is an empty array

  // we want this to happen during componentDidMount phase, so for functional component we use the useEffect hook
  useEffect(() => {
    // React doesn't allow us to decorate useEffect with async; so we encapsulate our calls to the server in another function
    // eventually the promise that is returned from the axios function will get resolved; this will call setUsers() and cause our component to rerender
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users"); // endpoint; returns a promise
      setUsers(result.data); // returns the array of user objects that we get from the server - we should store in state of this component
    }

    // this function doesn't get called automatically so we need to explicitly call it
    getUsers(); // don't await this because then we have to decorate useEffect with async keyword; don't want to do this
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
