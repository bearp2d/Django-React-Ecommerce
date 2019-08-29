import { ADD_NOTIF } from "../types";

export const addNotif = notification => {
  const key = notification.options && notification.options.key;

  return {
    type: ADD_NOTIF,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random()
    }
  };
};
