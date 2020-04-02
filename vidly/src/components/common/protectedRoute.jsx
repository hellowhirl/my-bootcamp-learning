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
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        console.log(props);
        // if Component is truthy render the passed Componenet, if not then we will call the render function and pass 'props'
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
