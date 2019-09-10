import { FETCH_PRODUCTS } from "../types";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: payload.results };
    default:
      return state;
  }
};
