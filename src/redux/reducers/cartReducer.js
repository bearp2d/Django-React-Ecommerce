import { FETCH_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../types";

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
    case UPDATE_QUANTITY:
      const updatedItems = state.items.map(item => {
        if (item.id === action.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };
    default:
      return state;
  }
};
