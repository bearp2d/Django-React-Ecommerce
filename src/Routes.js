import React from "react";
import { Switch, Route } from "react-router-dom";

import Logout from "./components/auth/Logout";
import AuthRoute from "./components/routes/AuthRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Header from "./components/layouts/Header";
import Loading from "./components/layouts/Loading";

const Login = React.lazy(() => import("./components/auth/Login"));

const Register = React.lazy(() => import("./components/auth/Register"));

const ChangePassword = React.lazy(() =>
  import("./components/auth/ChangePassword")
);

const Profile = React.lazy(() => import("./components/profile/Profile"));

const PersonalInfo = React.lazy(() =>
  import("./components/profile/personalInfo/PersonalInfo")
);

const PersonalInfoEdit = React.lazy(() =>
  import("./components/profile/personalInfo/PersonalInfoEdit")
);

const Addresses = React.lazy(() => import("./components/profile/Addresses"));

const FavoriteProducts = React.lazy(() =>
  import("./components/profile/FavoriteProducts")
);

const Orders = React.lazy(() => import("./components/profile/Orders"));

const OrdersDetail = React.lazy(() =>
  import("./components/profile/Orders/OrdersDetail")
);

const Products = React.lazy(() => import("./components/products/Products"));

const ProductsDetail = React.lazy(() =>
  import("./components/products/ProductsDetail")
);

const Cart = React.lazy(() => import("./components/cart/Cart"));

const Order = React.lazy(() => import("./components/order/Order"));

const Routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Loading inFetching />
      <Switch>
        <ProtectedRoute exact path="/logout" component={Logout} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <ProtectedRoute
          exact
          path="/change-password"
          component={ChangePassword}
        />
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
        <ProtectedRoute exact path="/profile/orders" component={Orders} />
        <ProtectedRoute
          exact
          path="/profile/orders/:id"
          component={OrdersDetail}
        />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:slug" component={ProductsDetail} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/order" component={Order} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
