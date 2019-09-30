import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/actions/authActions";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return null;
};

export default Logout;
