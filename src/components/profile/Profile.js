import React from "react";
import Grid from "@material-ui/core/Grid";

import Sidebar from "./layouts/Sidebar";
import PersonalInfo from "./personalInfo";

const Profile = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md="auto">
          <Sidebar />
        </Grid>
        <Grid item md>
          <PersonalInfo />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
