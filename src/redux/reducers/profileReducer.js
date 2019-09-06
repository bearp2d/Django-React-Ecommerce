import { FETCH_ADDRESSES, CREATE_ADDRESS, DELETE_ADDRESS } from "../types";

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
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id != payload)
      };
    default:
      return state;
  }
};
