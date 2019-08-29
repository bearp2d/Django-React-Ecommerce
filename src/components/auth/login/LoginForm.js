import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import LoadingButton from "../../utils/LoadingButton";
import Copyright from "../../utils/Copyright";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  customError: {
    textAlign: "center"
  }
}));

const LoginForm = props => {
  const {
    values: { phone_number_or_email, password },
    errors,
    handleSubmit,
    handleChange,
    touched
  } = props;
  const { loading } = useSelector(state => state.auth);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone_number_or_email"
            label="Phone Number OR Email Address"
            name="phone_number_or_email"
            autoComplete="phone_number_or_email"
            helperText={
              touched.phone_number_or_email && errors.phone_number_or_email
            }
            error={
              (touched.phone_number_or_email &&
                Boolean(errors.phone_number_or_email)) ||
              Boolean(errors.non_field_errors)
            }
            value={phone_number_or_email}
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
            helperText={touched.password && errors.password}
            error={
              (touched.password && Boolean(errors.password)) ||
              Boolean(errors.non_field_errors)
            }
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
            disabled={loading}
            loading={loading}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginForm;
