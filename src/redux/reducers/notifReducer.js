import { ADD_NOTIF } from "../types";

const initialState = {
  notifications: []
};

const defaultOptions = {
  variant: "success",
  autoHideDuration: 3000
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIF:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key: action.key,
            options: { ...defaultOptions, ...action.notification.options },
            ...action.notification
          }
        ]
      };
    default:
      return state;
  }
};
