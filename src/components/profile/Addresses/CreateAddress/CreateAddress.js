import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useTheme } from "@material-ui/core/styles";
import * as Yup from "yup";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

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

const CreateAddress = ({ fullScreen, open, handleClose, onSubmit }) => {
  const values = {
    reciver_full_name: "",
    reciver_phone_number: "",
    state: "",
    city: "",
    postal_address: "",
    postal_code: ""
  };
  const theme = useTheme();
  const responsiveFullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const handleSubmit = (address, { setErrors }) => {
    dispatch(createAddress(address, setErrors, onSubmit || handleClose));
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen || responsiveFullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
      >
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
