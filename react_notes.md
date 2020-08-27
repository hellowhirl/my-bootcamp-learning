<header>
React Fundamentals Notes
============
</header>

Each component is a piece of UI - build them in isolation and then put them together to build complex UI's

React elements are just JS objects that maps to a DOM elements (just represents DOM elememnt in memory)

Don't need to write code to query and manipulate DOM or attach event handlers to DOM elements

Both below are similar in component based architecture;

Angular is a complete solution framework

React is simply a library that handles the View - making sure view is in sync with the state

```
$ create-react-app
```

- install Web Development Server, Webpack, Babel (zero config setup)

```
$ npm run eject
```

- above command makes config possible

JSX: JavaScript XML

Babel converts JSX code to browser readable JavaScript

### Helpful plugins:

- Prettier
- Simple React Snippets
  - shortcuts like: imrc, cc
- Code Runner
- Auto Import - ES6, TS, JSX
- File utils
- Live Server

### Nifty libraries:

- nodemon (automatically restarts node server on & off between changes)

`id="root"` is container for our React app

### react-scripts:

`"start"`: "react-scripts start", // start dev server

```
$ npm start
```

`"build"`: "react-scripts build", // build application for production for optimized package

`"test"`: "react-scripts test", // for running unit tests

`"eject"`: "react-scripts eject" // eject from create-react app and customize configs for this project

- all the complex configs (babel, webpack, etc.) are hidden

only use if you know what you're doing

`$ npm run eject`

- this will make all dependencies visible and you can also see 'config' folder

Full-stack: JavaScript / Node + Express + MongoDB

better to use .jsx for file names in 'components' - we get better code completion

Simple React Snippets

- imrc: import React / Component
- cc: Class Coomponent

Setting attribute:

```html
<img src="{this.state.imageUrl}" alt="" />
```

we can't use 'class' because it's a reserved keyword in JS, so we use 'className' in JSX

refactor shortcut in VS code : CTRL + SHIFT + R

alias for npm install

- `$ npm i`

When we build an application webpack will pull in files that we have specified on index.js with 'import' and put them in a final bundle

Real world applications consist of a "tree of components"

Zen coding with Emmet: create table with class "container" with <thead> enclosing <tr> enclosing 4 <td> tags

- `table.container>thead>tr>td\*4`

### Correct vs Incorrect ES6 syntax for JSX React components:

- Correct:

  - when we are returning an object from an arrow function we need to put that object in parenthesis
  - otherwise JavaScript enging will parse {} as a code block instead of as an object

  ```jsx
  {
    this.state.counters.map((c) => <Counter key={c.id} />);
  }
  ```

- Incorrect

  ```jsx
  {
    this.state.counters.map((c) => {
      <Counter key={c.id} />;
    });
  }
  ```

\*In developer tools '\$0' indicates the latest element we have selected in dev tools

\*For example, on `<button>` we can use \$0.click() and activate the button

## Props vs State

- props is data that we give to a component - eg. input to component like value={counter.value} - cannot access the state of other component

- props is read-only: we cannot change input to component inside of the component

Cannot do this code within a component: `this.props.value = 0;`

will get error: "Cannot assign to read only property 'value' of object '#<Object>' - instead we should use state and 'setState' creating method within the life cycle of the component

- state is data that is local (private) to a component (not accessible to other components)

  - sometimes a component will not have a state, it may get all of its data through props

💡 "The component that owns a piece of the state, should be the one modifying it"

The whole point of using objects is to encapsulate related values

### Local state is different from outside components problem:

- Single source of truth: remove the local state in the child component and have a single source of truth

- if we don't have a single source of truth, state can be changed but it won't be reflected in the DOM

- each component have their own local state - so values are disconnected

* Controlled Componnet: has no local state but receives data via props and raises events when data needs to be changed - it is entirely controlled by its parent

### Keeping multple components in sync:

- "lift the state up": when there is no parent/child relationship between 2 componenets and you want to share data between them

- if we lift state up to <App /> then it can be parent to other child components, then state can be passed using props

### Lifting the state up:

- lifted up state from counters componenet to its parent (App componenet)

- now we can share state with chilren of this component via props, and with this technique now we have multiple componenets in sync

### Stateless Functional Components:

- Zen coding shortcut: sfc

- for classes that have a single method (like return()) and no state we can convert into a Stateless Functional Component

- simply define a function that returns a React element (instead of using class that extends Component class with render method

### Lifecycle Hooks\*

(below are used 90% of time)

```
// MOUNT //
constructor
render
componentDidMount // App gets mounted and goes into DOM

// UPDATE //
render
componentDidUpdate // used for if we want to make ajax call to get new data based on changes to state and props objects

// UNMOUNT //
componentWillUnmount // gives us opportunity to do clean up (timers and listeneres) and prevent memory leaks
```

- cannot use lifecycle hooks in stateless functional components - they can only be used with class components

- when a component is rendered we get a React element which updates virtual DOM - so we have 2 object references in memory for old virtual DOM and new virtual DOM, then React will update DOM based on the difference only

💡 When writing code, go step by step. Write a little bit of code, test to see if it works, then move on. Don't go for "big moves"

### A way to organize folders in a React project

| folders |                     Contetns                      |
| ------- | :-----------------------------------------------: |
| common  | components that can be used across other projects |
| utlis   |           utility classes and functions           |

in order to chain methods in lodash we need to convert array into lodash wrapper

VS Code shortcut:
`command + P and type '@'`: look at members of a class, and search from that

### Levels of components:

- high level: simplified, abstract
- low level: detailed, elements

Symetry/consistency is when high level or low level components are grouped together - should be same level of abstraction

Object destructuring should be done at the beginning of every functional component

# React Router

- to add routing to our project we need to use following command

npm i react-router-dom

<Route> component looks at the current URL and if it matches 'path' attribute then it will return the component that is in the 'component' attribute - these attributes are passed as props

props wrapped with a Route component:

- history: to work with history object in the browser - with this we can send user to a different page
- location: represents where app is at now
- match: contains info about about how URL matches path we set in our route

How to pass/retrieve route parameters

- to define a parameter in URL path we should prefix that parameter with a colon
- fetch from 'match.params'

- when we define parameters in our route by detault those parameters are required
- to make then not required we append a '?'

- programmatic navigation:

- nested routing: for example routing on top and bottom

Zen coding trick:
Route[path][component]*4
form>(div.form-group>label+input.form-control)*2

Shortcut to tab through all methods in a component
SHIFT + CMD + >

Shortcut from command palette (SHIFT + CMD + P)
Wrap with abbreviation (to surround selected text with a tag - also possible to do zen coding)

Shortcut for editing multiple places in VS Code:
Hold ALT while selecting different places

In React we should never work with the 'document' object - we are abstracting from it

- also it makes our applications easier to maintain and unit test

onChange event:
occurs when the value of an element has been changed.

currentTarget event property:
returns the element whose event listeners triggered the event.

- Rule of thumb: when building a form we should set initialize the properties of state objects to empty string '' or some value from the server, otherwise we'll get an error

VS code shortcut - Select all occurences
CMD + SHIFT + L

VS code shortcut - indenting line
CMD + { OR }

abort early:
by default terminates validation as soon as it finds an error

- when setting up validation for a form all we usually need to do is set up the schema

* in React we can substitute 'extends Component' for our own custom class,
  then we can have a class we define inherit all the methods we have defined in the custom base class

* class components don't always need to have a render() method

REST API's
REST: Representational State Transfer
API's: endpoints (Application Programming Interfaces), an interface for our applications

- JSONPlaceholder website provides endpoints that are publicly accessible over the Internet
- We can set HTTP requests to these endpoints to get, create, update, delete data (CRUD operations)

endpoint for 'posts':
https://jsonplaceholder.typicode.com/posts

Fetch API (browsers can natively send HTTP requests)
jQuery AJAX (just like the old days)
Axios (popular - Greek word that means "suitable")

promise: an object that holds the result of an asynchronous operation (will complete in the future)

Lifecycle of an HTTP request:

201 Created
The request has been fulfilled, resulting in the creation of a new resource.

204 No Content
The server successfully processed the request and is not returning any content.

Request Method (in Headers): determines intent of the request
GET (getting data)
POST (creating data)
PUT (updating data)
DELETE (deleting data)
OPTIONS (whenver an application sends an AJAX request to a different domain the browser will send an OPTIONS request)

Request Payload: shows the object that we sent to the server

Response Tab: the response the API returned to us

Optimistic vs Pessimistic Updates

Optimistic:

- keep reference to the original state
- update UI before calling the server
- wrap the call to the server in a try/catch block
- in catch block we should display an error and update state to previous state

Expected and Unexpected Errors:

Expected: API endpoints predict and return (400, 404)
Unexpected: network down, server down, db down, bug

- Log these Errors
- Displays a generic and friendly error message

Toastify install:
npm i react-toastify@4.1

Axios Interceptors

- able to intercept requests and responses
- if there is an unexpected error we can handle that error in one place - display error message to user

Sentry.io: Logging as a service provider (processing error exceptions from websites)

### Backend stack for Vidly

- Node: runtime environment for executing JavaScript code outside of a browser (we can build a web server that responds to http requests)
- Express: framework for building RESTful API's
- MongoDB: database management system for storing our data (run with npm or yarn)

vidly-api-node

- change to:
  "bcrypt": "^3.0.6"

Start API server:
node index.js

JSON format:

- all 'keys' should be in "quotes"
  {
  "example": "test",
  "foo": bar,
  "whatever": true,
  "number": 2,
  "stringNumber": "123"
  }

# Authentication and Authorization

- In our applications our backend should behave like this:

  - have an endpoint for registering users - the endpoint should receive a http POST request
  - should respond with either 200 or 400

- If we make data object names consistent between frontend and backend then our code will be cleaner and easier to maintain
- Best to have a single module that is responsible for knowing how authentication is implemented (as opposed to scattered all over the place)

In Chrome Dev tools under Network there is a Preview tab - shows us the body of the reponse from the server

JSON web token (JWT):

- an identification card (like a driver's license)
- at first if client sends a valid username and password then the server will give the client an identificaiton card
- the server will then validate - if the JSON web token is valid then it will execute the client's request

authService.js - responsible for login and logout

Local Storage

- every browser has a small local database called 'Local Storage' - and here we can store key value pairs
- in dev tools under Application tab / Storage / Local Storage / specific domain

Headers

- after we send a request the server will send back http headers
- whenever a header starts with "x" it will be treated as a custom header (as it's not a part of standard http protocol)

Vidly API

- note: shut down API service before we make any changes to its code
- routes/users.js: contains implementation of our user endpoint. Refer to router.post()
- .header() method: make change so that server will whitelist headers that browser or client is allowed to access
- we are using Node for backend in this case

.header("access-control-expose-headers", "x-auth-token")

- then we will be able to get our custom header

JWT.io - Debugger

- able to debug a JSON token and look at its content
- 3 parts:

  - Header: standard, all tokens have it
  - Payload: encoded version of our JSON object (decoded with base64 algorithm) - for example, content has various attributes about the user (claims)
  - Digital Signature: generated based on the header, payload, and a secret that is only available on the server

  - if we make any changes to the Payload (adding or removing characters) then the Digital Signature needs to be regenerated (but needs the private key which is stored on the server)

Calling protected API Endpoints

- after setting "requiresAuth" to "true" in vidly API we get a 401 error in our application
- 401 Unauthorized: API endpoint required the client to send a JSON web token but the client didn't send that

Removing bi-directional dependency

- first, determine which module is more essential (a core module) - it's our http module
- our auth module should be on top of http module

Backend implementation for delete function in vidly API

- if there is a request to delete a movie make sure the user is authenticated and is an admin
- [auth, admin] are functions: refered to as Middleware Functions
- first node backend will run auth middleware function, then admin middleware function - using next()
- when we overcome all these middleware function checks then we can perform delete action (we assign property 'isAdmin' to 'true')

# Deployment

Environment Variables for different environments:
Dev - Test - Production (sometimes we want them to be different)
For example when we are doing development we want to use a real production backend with real data (so config.json isn't going to help us with production builds)

.env files (.env.development, .env.test, .env.production) - all environment variables have a key and a value - the key start with 'REACT*APP*' (REACT_APP_NAME =Vidly in Dev OR REACT_APP_VERSION=1)

When we deploy our application to production we want an optimized production build (without all the extra code in our development build)
We can get an optimized production build (and then contents of the folder to our web server wiht FTP, etc) with:
$ npm run build
Simple lightweight server can be installed with:
    $ npm install -g server
Then we can serve content of target folder (build) with:
\$ serve -s build

- During the build time expressions like "process.env.REACT_APP_NAME" that reference an environement variable are replaced with the value of that envvironment variable

== Flow for Adding to a git Repository ==

add a .gitignore file
good to add: node_modules/ ('/' at end represents a folder)

initializes a git repositiory in a folder
\$ git init

stage all files to be commited to repository and commit
$ git add .
    $ git commit -m "Iniital commit"

== Deploying to Heroku ==

Heroku is a cloud service for deploying an application and its backend

to login we use:
\$ heroku login

if login fails try below and then logging in:
\$ export HTTP_PROXY=http://proxy.server.com:1234

to create a Heroku app, go inside api project folder and enter:
$ heroku create (if this is left out then one will be auto-genereated))
    $ heroku create project-name-vidly (also possible to provide name)

    - we will see address of our application on herokuapp.com (our backend will be hosted here)
    - our frontend should send requests to this address/api/whatever
    - we will also see the address of a git repository under heroku.com (https://git.heroku.com/name-of-application.git)
    - whenever we push new code to above git repository the practice of continuous integration happens as below:
        heroku will be notified, download latest source code, build it, then deploy to our backend heroku address

to push code that we have in our local repository to the remote repository:
\$ git push heroku master

to open heroku app (launches browser pointing to our application on Heroku):
\$ heroku open

check logs on why our application crashed
\$ heroku logs

We get an error:
MongoNetworkError: failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED 127.0.0.1:27017

- 27017 is the default port for MongoDB. In our backend project in the config folder, in default.json:
  "db": "mongodb://localhost/vidly" does not exist on the heroku server that is hosting our application
  - so we need to change this to the address of our MongoDB on MLab
  - we don't want to store it in the config file because it will be stored as text in a .git repository
  - never store secrets in your config files (they can be open to anybody - security risk)
  - for a production environment we should use environment variables
  - these env variables are not part of the source code - we need to set them in the terminal

how to store a variable on Heroku:
\$ heroku config:set project_db=mongodb://someuser:password@blahblahblah

# React Advanced Notes

## Higher Order Components (HOC)

We use higher order components to reuse logic across components

- We create a tooltip component and pass it as an argument to a function. In that function we will return a new component
- In the new bigger component we're going to implement all the common functionality (like showing a tooltip)
  - in our example, all we're doing is implementing some logic and we're sharing this logic across different components
- `rcc`: shortcut to create React Class Component
- by convention we prefix files with the word "with"
- To implement a HOC we create a new function that takes an existing component and return a new componetn
  - can return a class component or a functional component

## Hooks

In React 16.8 we got a new feature called "hooks" in functional components

- allows us to hook into state and life cycle features normally only available in class componenets

  - now we can create "stateful" functional components

- also, code looks shorter and cleaner

- don't have to create a class, `extends Component`, create constructors or call 'super' to pass the props, no references to 'this'

ALl functions that start with "use" are examples of hooks in React

### useState Hook

```jsx
import React, { useState } from "react";
// we can pass any initial value like a number, string, boolean, object, etc. (no limitations)
const [count, setCount] = useState(0);
```

One rule: we can't call hooks inside loops, conditions, or nested functions

- React creates state variables based on order we call each hook funcition; above will mess up order of calls to hook functions

### useEffect Hook

- problem with class lifecycle methods is that we have to go back and forth between components to see what is going on

- with useEffect hook we can encapsulate all the logic around a certain piece of functinality in a single place

  - this gives us extra benefit: we can extract this logic, put it in its own module, and use it across different compomenets as a custom hook

## Context (shared data)

Solving the problem of "prop drilling" which is drilling a hole at every level to pass a prop down our component tree

- up until recently Redux has handled this problem with Store, but now Context (shared data) can do the same thing

2 ways to deliver context: Class components and Functional Components

### Class Components - steps:

1 - Create a context object

- In our "context" folder we add a new file called "userContext.js"

- we could have different context for sharing different things like "themeContext.js"

2 - Provide this context in a top component

- wrap an element with our `<SomethingContext.Provider>` component

  - this component has a special prop called 'value' where we can pass an object down our component tree

3 - Consume this context somewhere in our component tree

- wrap an element with our `<SomethingContext.Consumer>` component

  - but this component expects a function as a child, so we should pass a lambda expression () => {}, otherwise will get error

  - we can call that value we pass anything like "value", "userContext" or "currentUser"

  - finally we can render the value that we are passing from the provider in this consumer like `currentUser.name`

- it's a good practice to give each context an explicit nmae; use the 'displayName' property

If we want to consume context outside of the render method like lifecycle methods then we just set a class componetns static properties, using 1 of 2 methods:

```jsx
// Method 1 - before class is defined
static contextType = userContext;
//
// class MovieList { render() {} }
//
// Method 2 - after class is defined
MovieList.contextType = userContext;
```

- then we can get the context by using `this.context`

### Functional Components - steps:

1 - call the `useContext` hook

Advanges:

- We don't have a Consumer component under our component
- no extra chunks of components (less convoluted)
- don't have to set static property
- don't have to use function to return content within the Consumer component (less complexity)

Going forward let's prefer functional components over class components

## Updating the Context object - steps:

1 - add a method in our ContextApp component: it is responsible for updating the state

2 - pass this method down using our `<SomethingContext.Provider>` object

3 - add a new component like `<Login>` and call our new method by declaring an object equal to `useContext(UserContext)`

4 - Finally, upon clicking the button that calls this new event handler method, the Provider will provide a new context ojbect to our component tree. Then all consumers will be notified and they will refresh themselves.

## Consuming multiple contexts

As our application grows we may want to create different types of context, like a "cart"

- the concept of a shopping cart is differnt than userContext, so we should create separate context for it

Just wrap with another `<SomethingContext.Provider>` wrapper where we want to pass down any specific value props

- then we can go to any child component and consume this other context object
