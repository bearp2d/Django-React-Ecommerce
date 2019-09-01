import { LOADING_UI, STOP_LOADING_UI } from "../types";

const initialState = {
  loading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
