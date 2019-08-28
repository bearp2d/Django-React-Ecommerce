import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from "../types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case AUTH_FAIL:
      return {
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
};
