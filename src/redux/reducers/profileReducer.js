import {
  FETCH_ADDRESSES,
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  FETCH_FAVORITE_PRODUCTS
} from "../types";

const initialState = {
  addresses: [],
  favoriteProducts: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ADDRESSES:
      return { ...state, addresses: payload };
    case CREATE_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, payload]
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== payload)
      };
    case UPDATE_ADDRESS:
      const updatedAddresses = state.addresses.map(address => {
        if (address.id === action.id) {
          return { ...address, ...action.payload };
        }
        return address;
      });
      return {
        ...state,
        addresses: updatedAddresses
      };

    case FETCH_FAVORITE_PRODUCTS:
      return { ...state, favoriteProducts: payload };
    default:
      return state;
  }
};
