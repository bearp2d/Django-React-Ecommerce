import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import Dialog from "@material-ui/core/Dialog";

import EditAddressForm from "./EditAddressForm";
import DialogTitle from "../../../utils/DialogTitle";
import { phone_number_reg } from "../../../utils/utils";
import { updateAddress } from "../../../../redux/actions/profileActions/AddressActions";

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

const EditAddress = ({ open, setOpen, address }) => {
  const {
    id,
    reciver_full_name,
    reciver_phone_number,
    state,
    city,
    postal_address,
    postal_code
  } = address;
  const values = {
    reciver_full_name,
    reciver_phone_number,
    state,
    city,
    postal_address,
    postal_code
  };
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (address, { setErrors }) => {
    dispatch(updateAddress(address, id, setErrors, handleClose));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle onClose={handleClose}>Add Address</DialogTitle>
      <Formik
        render={props => (
          <EditAddressForm handleClose={handleClose} {...props} />
        )}
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      />
    </Dialog>
  );
};

export default EditAddress;
