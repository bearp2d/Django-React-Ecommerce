import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, to, ...rest }) => {
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={props =>
        loading === false &&
        (isAuthenticated === true ? (
          <Redirect to={to} />
        ) : (
          <Component {...props} />
        ))
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  to: "/"
};

export default ProtectedRoute;
