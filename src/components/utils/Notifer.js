import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Notifier = () => {
  const notifications = useSelector(store => store.notif.notifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = key => (
    <IconButton
      key="close"
      aria-label="close"
      color="inherit"
      onClick={() => closeSnackbar(key)}
    >
      <CloseIcon style={{ fontSize: 20 }} />
    </IconButton>
  );

  useEffect(() => {
    notifications.forEach(({ message, options = {} }) => {
      enqueueSnackbar(message, {
        action,
        ...options
      });
    });
  }, [notifications]);

  return null;
};

export default Notifier;
