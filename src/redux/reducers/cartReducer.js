import { FETCH_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CART:
      return { ...state, items: payload.items };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    default:
      return state;
  }
};
