import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(0,0,0,0.2)"
  },

  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden"
  }
}));

const LoadingModal = () => {
  const open = useSelector(state => state.ui.loadingUI);
  const classes = useStyles();

  return (
    <Dialog
      open={open || false}
      BackdropProps={{
        classes: {
          root: classes.root
        }
      }}
      PaperProps={{
        classes: {
          root: classes.paper
        }
      }}
    >
      <CircularProgress />
    </Dialog>
  );
};

export default LoadingModal;
