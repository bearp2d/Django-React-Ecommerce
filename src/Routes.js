import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Logout from "./components/auth/Logout";
import Profile from "./components/profile";
import AuthRoute from "./components/routes/AuthRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Header from "./components/layouts/Header";
import Sidebar from "./components/profile/layouts/Sidebar";
const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/logout" component={Logout} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Sidebar>
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Sidebar>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
