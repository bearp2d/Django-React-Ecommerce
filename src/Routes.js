import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";
import AuthRoute from "./components/routes/AuthRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <AuthRoute exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
