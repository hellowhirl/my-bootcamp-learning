import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

// when we use the Route component we either supply a component or a render function
// it is possible that 'Component' is null, so we should also pick 'render' method from our props object
const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      //   path={path}
      {...rest}
      render={props => {
        console.log(props); // 'location' object represents the current location before we get redirected
        if (!auth.getCurrentUser())
          return (
            <Redirect
              // refering to docs, 'to' can also pass an object - including 'state' which we can use to pass any additional data in the componenet we are redirecting the user too (in this case our login component)
              to={{
                pathname: "/login",
                // here we are setting a property like 'from' to a 'location' object - which represents current location before we get redirected
                state: { from: props.location }
              }}
            />
          );
        // if Component is truthy render the passed Componenet, if not then we will call the render function and pass 'props'
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
