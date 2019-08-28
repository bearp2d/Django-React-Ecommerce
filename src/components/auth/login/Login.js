import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import LoginForm from "./LoginForm";
import { login } from "../../../redux/actions/authActions";

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required()
});

const Login = () => {
  const values = { email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, { setErrors, resetForm }) => {
    const user = {
      phone_number_or_email: values.email,
      password: values.password
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
