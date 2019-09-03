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
    touched,
    dirty
  } = props;
  const { loading } = useSelector(state => state.auth);
  const { classes } = props;
  console.log(props);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={0}>
        <Grid item md>
          <div className={classes.wrapper}>
            <TextField
              name="first_name"
              label="First name"
              fullWidth
              helperText={touched.first_name && errors.first_name}
              error={
                (touched.first_name && Boolean(errors.first_name)) ||
                Boolean(errors.non_field_errors)
              }
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
              helperText={touched.phone_number && errors.phone_number}
              error={
                (touched.phone_number && Boolean(errors.phone_number)) ||
                Boolean(errors.non_field_errors)
              }
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
              helperText={touched.last_name && errors.last_name}
              error={
                (touched.last_name && Boolean(errors.last_name)) ||
                Boolean(errors.non_field_errors)
              }
              value={last_name}
              onChange={handleChange}
            />
          </div>
          <div className={classes.wrapper}>
            <TextField
              name="national_code"
              label="National code"
              fullWidth
              helperText={touched.national_code && errors.national_code}
              error={
                (touched.national_code && Boolean(errors.national_code)) ||
                Boolean(errors.non_field_errors)
              }
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
          helperText={touched.email && errors.email}
          error={
            (touched.email && Boolean(errors.email)) ||
            Boolean(errors.non_field_errors)
          }
          value={email}
          onChange={handleChange}
        />
      </div>
      <LoadingButton
        type="submit"
        fullWidth
        color="primary"
        disabled={!dirty || loading}
        loading={loading}
        className={classes.button}
      >
        Update
      </LoadingButton>
    </form>
  );
};

export default PersonalInfoEditForm;
