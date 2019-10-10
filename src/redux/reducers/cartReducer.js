import { FETCH_CART } from "../types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CART:
      return { ...state, items: payload.items };
    default:
      return state;
  }
};
