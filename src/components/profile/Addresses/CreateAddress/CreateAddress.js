import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import CreateAddressForm from "./CreateAddressForm";
import AddLocationIcon from "../../../icons/AddLocation";
import DialogTitle from "../../../utils/DialogTitle";
import { phone_number_reg } from "../../../utils/utils";
import { createAddress } from "../../../../redux/actions/profileActions/AddressActions";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    border: "4px dashed #b8b8b8",
    height: "280px",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "bold"
  },
  icon: {
    fontSize: "75px"
  }
}));

const validationSchema = Yup.object({
  reciver_full_name: Yup.string().required(),
  reciver_phone_number: Yup.string()
    .matches(phone_number_reg, "Invalid phone number")
    .required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  postal_address: Yup.string().required(),
  postal_code: Yup.string().required()
});

const CreateAddress = () => {
  const values = {
    reciver_full_name: "",
    reciver_phone_number: "",
    state: "",
    city: "",
    postal_address: "",
    postal_code: ""
  };
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (address, { setErrors }) => {
    dispatch(createAddress(address, setErrors, handleClose));
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className={classes.button}>
        <AddLocationIcon className={classes.icon} color="action" />
        Add new address
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle onClose={handleClose}>Add Address</DialogTitle>
        <Formik
          render={props => (
            <CreateAddressForm handleClose={handleClose} {...props} />
          )}
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        />
      </Dialog>
    </React.Fragment>
  );
};

export default CreateAddress;
