import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, to, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.ui.loading);

  return (
    loading === false && (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Redirect to={to} />
          ) : (
            <Component {...props} />
          )
        }
      />
    )
  );
};

AuthRoute.defaultProps = {
  to: "/"
};

export default AuthRoute;
