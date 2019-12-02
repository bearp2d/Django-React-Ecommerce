import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import RegisterForm from "./RegisterForm";
import { register } from "../../../redux/actions/authActions";
import { phone_number_reg } from "../../utils/utils";

const validationSchema = Yup.object({
  phone_number: Yup.string()
    .matches(phone_number_reg, "Invalid phone number")
    .required("Required field"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required field")
});

const Register = () => {
  const values = { phone_number: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (
    { phone_number, password },
    { setErrors, resetForm }
  ) => {
    const user = {
      phone_number,
      password
    };
    dispatch(register(user, setErrors, resetForm));
  };

  return (
    <Formik
      render={props => <RegisterForm {...props} />}
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default Register;
