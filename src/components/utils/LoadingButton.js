import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  button: {
    position: "relative"
  },
  progress: {
    position: "absolute"
  }
}));

const LoadingButton = props => {
  const { loading, ...rest } = props;
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      fullWidth
      color="primary"
      className={classes.button}
      disabled={loading}
      {...rest}
    >
      Login
      {loading && <CircularProgress size={30} className={classes.progress} />}
    </Button>
  );
};

export default LoadingButton;
