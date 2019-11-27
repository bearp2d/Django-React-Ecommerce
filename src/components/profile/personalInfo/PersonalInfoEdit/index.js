import React from "react";
import Sidebar from "../../layouts/Sidebar";
import PersonalInfoEdit from "./PersonalInfoEdit";

export default () => (
  <Sidebar activeItem="personalInfo">
    <PersonalInfoEdit />
  </Sidebar>
);
