import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import CreateAddressForm from "./CreateAddressForm";
import DialogTitle from "../../../utils/DialogTitle";
import { phone_number_reg } from "../../../utils/utils";
import { createAddress } from "../../../../redux/actions/profileActions/AddressActions";

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

const CreateAddress = ({ noCancel, fullScreen, open, setOpen }) => {
  const values = {
    reciver_full_name: "",
    reciver_phone_number: "",
    state: "",
    city: "",
    postal_address: "",
    postal_code: ""
  };
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (address, { setErrors }) => {
    dispatch(createAddress(address, setErrors, handleClose));
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
      >
        {noCancel === false ? (
          <DialogTitle onClose={handleClose}>Add Address</DialogTitle>
        ) : (
          <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">Add Address</Typography>
          </MuiDialogTitle>
        )}

        <Formik
          render={props => (
            <CreateAddressForm
              handleClose={handleClose}
              noCancel={noCancel}
              {...props}
            />
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

CreateAddress.defaultProps = {
  noCancel: false,
  fullScreen: false
};

export default CreateAddress;
