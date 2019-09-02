import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import PersonalInfoEditForm from "./PersonalInfoEditForm";
import { phone_number_reg } from "../../../utils/utils";
import { updateUser } from "../../../../redux/actions/authActions";

const validationSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  phone_number: Yup.string()
    .matches(phone_number_reg, "Invalid phone number")
    .required(),
  national_code: Yup.number(),
  email: Yup.string().email()
});

const PersonalInfoEdit = props => {
  const dispatch = useDispatch();
  const {
    user: { first_name, last_name, phone_number, national_code, email },
    viewUser
  } = props;

  const values = {
    first_name: first_name || "",
    last_name: last_name || "",
    phone_number: phone_number || "",
    national_code: national_code || "",
    email: email || ""
  };

  const handleSubmit = (user, { setErrors }) => {
    dispatch(updateUser(user, setErrors));
    // viewUser();
  };

  return (
    <React.Fragment>
      <Formik
        render={props => (
          <PersonalInfoEditForm handleCancel={viewUser} {...props} />
        )}
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default PersonalInfoEdit;
