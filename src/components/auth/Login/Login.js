import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import LoginForm from "./LoginForm";
import { login } from "../../../redux/actions/authActions";
import { phone_number_or_email_reg } from "../../utils/utils";

const validationSchema = Yup.object({
  phone_number_or_email: Yup.string()
    .matches(phone_number_or_email_reg, "Invalid phone number or email")
    .required(),
  password: Yup.string()
    .min(8)
    .required()
});

const Login = () => {
  const values = { phone_number_or_email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (
    { phone_number_or_email, password },
    { setErrors, resetForm }
  ) => {
    const user = {
      phone_number_or_email,
      password
    };
    dispatch(login(user, setErrors, resetForm));
  };

  return (
    <div>
      <Formik
        render={props => <LoginForm {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
