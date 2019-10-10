import React from "react";
import Loadable from "react-loadable";
import { Switch, Route } from "react-router-dom";

import Logout from "./components/auth/Logout";
import AuthRoute from "./components/routes/AuthRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Header from "./components/layouts/Header";
import LoadingModal from "./components/layouts/LoadingModal";

const Login = Loadable({
  loader: () => import("./components/auth/login"),
  loading: LoadingModal
});

const Register = Loadable({
  loader: () => import("./components/auth/register"),
  loading: LoadingModal
});

const Profile = Loadable({
  loader: () => import("./components/profile/Profile"),
  loading: LoadingModal
});

const PersonalInfo = Loadable({
  loader: () => import("./components/profile/personalInfo/PersonalInfo"),
  loading: LoadingModal
});

const PersonalInfoEdit = Loadable({
  loader: () => import("./components/profile/personalInfo/PersonalInfoEdit"),
  loading: LoadingModal
});

const Addresses = Loadable({
  loader: () => import("./components/profile/Addresses"),
  loading: LoadingModal
});

const FavoriteProducts = Loadable({
  loader: () => import("./components/profile/FavoriteProducts"),
  loading: LoadingModal
});

const Products = Loadable({
  loader: () => import("./components/products/Products"),
  loading: LoadingModal
});

const ProductsDetail = Loadable({
  loader: () => import("./components/products/ProductsDetail"),
  loading: LoadingModal
});

const Cart = Loadable({
  loader: () => import("./components/cart/Cart"),
  loading: LoadingModal
});

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <LoadingModal />
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
        <ProtectedRoute exact path="/cart/" component={Cart} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
