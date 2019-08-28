import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
