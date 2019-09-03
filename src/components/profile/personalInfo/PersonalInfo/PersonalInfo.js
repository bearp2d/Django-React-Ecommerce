import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
  const {
    first_name,
    last_name,
    phone_number,
    national_code,
    email
  } = useSelector(state => state.auth.user);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h5">Personal info</Typography>
      </div>
      <Grid container spacing={0}>
        <Grid item md>
          <div className={classes.wrapper}>
            <Typography variant="body1">First name:</Typography>
            <Typography variant="h6">{first_name || "-"}</Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography variant="body1">Phone number:</Typography>
            <Typography variant="h6">{phone_number || "-"}</Typography>
          </div>
        </Grid>
        <Grid item md>
          <div className={classes.wrapper}>
            <Typography variant="body1">Last name:</Typography>
            <Typography variant="h6">{last_name || "-"}</Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography variant="body1">National code:</Typography>
            <Typography variant="h6">{national_code || "-"}</Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <Typography variant="body1">Email:</Typography>
        <Typography variant="h6">{email || "-"}</Typography>
      </div>
      <Button
        component={Link}
        to="/profile/personal-info/edit"
        color="primary"
        fullWidth
        className={classes.button}
      >
        Edit
      </Button>
    </Paper>
  );
};

export default PersonalInfo;
