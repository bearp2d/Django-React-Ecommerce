import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import LoadingButton from "../../layouts/LoadingButton";
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
    values: { old_password, new_password, new_password2 },
    errors,
    handleSubmit,
    handleChange,
    isValid
  } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="old_password"
            label="Old password"
            name="old_password"
            type="password"
            helperText={errors.old_password}
            error={
              Boolean(errors.old_password) || Boolean(errors.non_field_errors)
            }
            value={old_password}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="new_password"
            label="New password"
            type="password"
            id="new_password"
            helperText={errors.new_password}
            error={
              Boolean(errors.new_password) || Boolean(errors.non_field_errors)
            }
            value={new_password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="new_password2"
            label="Reapet new password"
            type="password"
            id="new_password2"
            helperText={errors.new_password2}
            error={
              Boolean(errors.new_password2) || Boolean(errors.non_field_errors)
            }
            value={new_password2}
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
            Change password
          </LoadingButton>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginForm;
