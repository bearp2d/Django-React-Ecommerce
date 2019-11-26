import React from "react";
import Sidebar from "../../layouts/Sidebar";
import PersonalInfo from "./PersonalInfo";

export default () => (
  <Sidebar activeItem="personalInfo">
    <PersonalInfo />
  </Sidebar>
);
