import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import RemoveIcon from "@material-ui/icons/Clear";

import DialogTitle from "../../utils/DialogTitle";
import LoadingButton from "../../layouts/LoadingButton";
import { removeFromCart } from "../../../redux/actions/cartActions";

const RemoveFromCart = ({ id }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(removeFromCart(id, handleClose));
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleOpen}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle onClose={handleClose}>Remove item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want remove this item from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            No, Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
          >
            Yes, Remove
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default RemoveFromCart;
