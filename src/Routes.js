import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Logout from "./components/auth/Logout";
import Profile from "./components/profile/Profile";
import PersonalInfo from "./components/profile/personalInfo/PersonalInfo";
import PersonalInfoEdit from "./components/profile/personalInfo/PersonalInfoEdit";
import Addresses from "./components/profile/Addresses";
import FavoriteProducts from "./components/profile/FavoriteProducts";
import Products from "./components/products/Products";
import ProductsDetail from "./components/products/ProductsDetail";
import AuthRoute from "./components/routes/AuthRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Header from "./components/layouts/Header";

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/logout" component={Logout} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute
          exact
          path="/profile/personal-info"
          component={PersonalInfo}
        />
        <ProtectedRoute
          exact
          path="/profile/personal-info/edit"
          component={PersonalInfoEdit}
        />
        <ProtectedRoute exact path="/profile/addresses" component={Addresses} />
        <ProtectedRoute
          exact
          path="/profile/favorite-products"
          component={FavoriteProducts}
        />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:slug" component={ProductsDetail} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
