import { FETCH_ADDRESSES } from "../types";

const initialState = {
  addresses: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ADDRESSES:
      return { ...state, addresses: payload };
    default:
      return state;
  }
};
