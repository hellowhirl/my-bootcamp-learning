import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

// it is possible that 'Component' is null, so we should also pick 'render' method from our props object
const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      //   path={path}
      {...rest}
      render={props => {
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props); // if Component is truthy or not
      }}
    />
  );
};

export default ProtectedRoute;
