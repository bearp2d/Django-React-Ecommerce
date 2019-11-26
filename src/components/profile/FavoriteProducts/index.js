import React from "react";
import Sidebar from "../layouts/Sidebar";
import FavoriteProducts from "./FavoriteProducts";

export default ({ history }) => (
  <Sidebar activeItem="favProducts">
    <FavoriteProducts history={history} />
  </Sidebar>
);
