import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const PersonalInfoView = props => {
  const {
    user: { first_name, last_name, phone_number, national_code, email },
    classes,
    handleEdit
  } = props;

  return (
    <React.Fragment>
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
        onClick={handleEdit}
        color="primary"
        fullWidth
        className={classes.button}
      >
        Edit
      </Button>
    </React.Fragment>
  );
};

export default PersonalInfoView;
