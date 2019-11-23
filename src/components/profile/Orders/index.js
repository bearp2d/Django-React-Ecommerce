import React from "react";
import Sidebar from "../layouts/Sidebar";
import Orders from "./Orders";

export default ({ ...props }) => (
  <Sidebar>
    <Orders {...props} />
  </Sidebar>
);
