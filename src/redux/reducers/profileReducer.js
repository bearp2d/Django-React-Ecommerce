import { FETCH_ADDRESSES, CREATE_ADDRESS } from "../types";

const initialState = {
  addresses: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ADDRESSES:
      return { ...state, addresses: payload };
    case CREATE_ADDRESS:
      return { ...state, addresses: [...state.addresses, payload] };
    default:
      return state;
  }
};
