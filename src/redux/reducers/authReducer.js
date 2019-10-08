import { AUTH_FAIL, AUTH_SUCCESS } from "../types";

const initialState = {
  isAuthenticated: null,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload
      };
    case AUTH_FAIL:
      return {
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};
