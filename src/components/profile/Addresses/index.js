import React from "react";
import Sidebar from "../layouts/Sidebar";
import Addresses from "./Addresses";

export default () => (
  <Sidebar activeItem="addresses">
    <Addresses />
  </Sidebar>
);
