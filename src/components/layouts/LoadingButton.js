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
  const { loading, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button className={classes.button} disabled={loading} {...rest}>
      {children}
      {loading && <CircularProgress size={30} className={classes.progress} />}
    </Button>
  );
};

export default LoadingButton;
