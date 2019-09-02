import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonalInfoView from "./PersonalInfoView";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  wrapper: {
    padding: theme.spacing(2),
    border: "1px solid #dedede"
  },
  button: {
    padding: theme.spacing(1.3)
  }
}));

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h5">Personal info</Typography>
      </div>
      <PersonalInfoView classes={classes} />
    </Paper>
  );
};

export default PersonalInfo;
