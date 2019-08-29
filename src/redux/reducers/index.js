import { combineReducers } from "redux";

import authReducer from "./authReducer";
import notiferReducer from "./notifReducer";

export default combineReducers({
  auth: authReducer,
  notif: notiferReducer
});
