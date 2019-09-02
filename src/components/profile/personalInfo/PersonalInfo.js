import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonalInfoView from "./PersonalInfoView";
import PersonalInfoEdit from "./personalInfoEdit";

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
  const user = useSelector(state => state.auth.user);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();

  const editUser = () => setEdit(true);
  const viewUser = () => setEdit(false);

  return (
    <Paper className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h5">Personal info</Typography>
      </div>
      {edit === true ? (
        <PersonalInfoEdit user={user} viewUser={viewUser} classes={classes} />
      ) : (
        <PersonalInfoView user={user} editUser={editUser} classes={classes} />
      )}
    </Paper>
  );
};

export default PersonalInfo;
