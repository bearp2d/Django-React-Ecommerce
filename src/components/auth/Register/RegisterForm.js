import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import MUILink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import useStyles from "../styles";
import LoadingButton from "../../layouts/LoadingButton";

const RegisterForm = props => {
  const {
    values: { phone_number, password },
    errors,
    handleSubmit,
    handleChange,
    isValid
  } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone_number"
            label="Phone Number"
            name="phone_number"
            autoComplete="phone_number"
            helperText={errors.phone_number}
            error={
              Boolean(errors.phone_number) || Boolean(errors.non_field_errors)
            }
            value={phone_number}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password}
            error={Boolean(errors.password) || Boolean(errors.non_field_errors)}
            value={password}
            onChange={handleChange}
          />
          {errors.non_field_errors && (
            <Typography
              variant="body1"
              className={classes.customError}
              color="error"
            >
              {errors.non_field_errors}
            </Typography>
          )}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isValid}
          >
            Register
          </LoadingButton>
          <MUILink component={Link} to="/login" variant="body2">
            {"You already have an account? Log In"}
          </MUILink>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;
