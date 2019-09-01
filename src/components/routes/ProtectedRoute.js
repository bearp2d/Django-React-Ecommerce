import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, to, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.ui.loading);

  return (
    loading === false && (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === false ? (
            <Redirect to={to} />
          ) : (
            <Component {...props} />
          )
        }
      />
    )
  );
};

ProtectedRoute.defaultProps = {
  to: "/login"
};

export default ProtectedRoute;
