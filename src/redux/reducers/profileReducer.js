import _ from "lodash";

import {
  FETCH_ADDRESSES,
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS
} from "../types";

const initialState = {
  addresses: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ADDRESSES:
      return { ...state, addresses: { ..._.mapKeys(payload, "id") } };
    case CREATE_ADDRESS:
      return {
        ...state,
        addresses: { ...state.addresses, [payload.id]: payload }
      };
    case DELETE_ADDRESS:
      return { ...state, addresses: _.omit(state.addresses, payload) };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: { ...state.addresses, [payload.id]: payload }
      };
    default:
      return state;
  }
};
