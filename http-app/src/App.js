import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// with axios interceptor we are able to handle unexpected errors globally

// axios.interceptors.response.use(success, error)
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;

  if (!expectedError) {
    console.log("logging the error", error);
    alert("an unexpected error occurred");
  }

  return Promise.reject(error);
});

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: []
  };

  // if unable to get posts from the server then our interceptor should kick in
  async componentDidMount() {
    // axios.get() - sends HTTP request to get some data, first arg is url
    // this method restores a promise
    // initially a promise is in the 'pending' state
    // then will turn into -> resolved (success) OR rejected (failure)

    // we can see the object returned from the promise:
    // const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(promise);
    // we can see the internal properties like [[PromiseStatus]] and [[PromiseValue]]

    // keyword 'await': awaits the promise so we can get the actual result from the response,
    // the outter function must also be decorated with 'async' keyword
    // the response has a property called 'data' which has this posts that we get from the server
    // here we use object destructuring and rename to 'posts'
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  // handleAdd is a property that we are setting to a function so we apply 'async' in front of arrow function paramter
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "Updated";
    // axios.put(1st arg: specific url that includes post id, 2nd arg: data to send to server),
    await axios.put(apiEndpoint + "/" + post.id, post);

    // axios.patch(), sending only properties that should be updated
    // await axios.put(apiEndpoint + "/" + post.id, { title: post.title });

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    // switching order here gives the illusion of a fast application
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    // only need try/catch block if we need to do something specific as result of a failure,
    // otherwise, leave handling of unexpected error to the interceptor
    try {
      // for deleting all we need is the url that identifies this resource
      await axios.delete("s" + apiEndpoint + "/abc"); // expected error simulation
      // await axios.delete("s" + apiEndpoint + post.id);  // unexpected error simulation
    } catch (ex) {
      // this exception(ex) object has 2 properties:
      // ex.request; if we can succesfully submit a request to the server - otherwise it is null
      // ex.response; set if we succesfully get a response from the server - if server crashes or no response then it will be null
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted");

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
