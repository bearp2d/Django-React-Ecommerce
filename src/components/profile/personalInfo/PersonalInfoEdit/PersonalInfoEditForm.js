import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import LoadingButton from "../../../layouts/LoadingButton";

const PersonalInfoEditForm = props => {
  const {
    values: { first_name, last_name, phone_number, national_code, email },
    errors,
    handleSubmit,
    handleChange,
    dirty,
    isValid
  } = props;
  const { loading } = useSelector(state => state.auth);
  const { classes } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={0}>
        <Grid item md>
          <div className={classes.wrapper}>
            <TextField
              name="first_name"
              label="First name"
              fullWidth
              helperText={errors.first_name}
              error={Boolean(errors.first_name)}
              value={first_name}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className={classes.wrapper}>
            <TextField
              name="phone_number"
              label="Phone number"
              fullWidth
              helperText={errors.phone_number}
              error={Boolean(errors.phone_number)}
              value={phone_number}
              onChange={handleChange}
            />
          </div>
        </Grid>
        <Grid item md>
          <div className={classes.wrapper}>
            <TextField
              name="last_name"
              label="Last name"
              fullWidth
              helperText={errors.last_name}
              error={Boolean(errors.last_name)}
              value={last_name}
              onChange={handleChange}
            />
          </div>
          <div className={classes.wrapper}>
            <TextField
              name="national_code"
              label="National code"
              fullWidth
              helperText={errors.national_code}
              error={Boolean(errors.national_code)}
              value={national_code}
              onChange={handleChange}
            />
          </div>
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <TextField
          name="email"
          label="Email"
          fullWidth
          helperText={errors.email}
          error={Boolean(errors.email)}
          value={email}
          onChange={handleChange}
        />
      </div>
      <LoadingButton
        type="submit"
        fullWidth
        color="primary"
        disabled={!dirty || loading || !isValid}
        loading={loading}
        className={classes.button}
      >
        Update
      </LoadingButton>
    </form>
  );
};

export default PersonalInfoEditForm;
