import { combineReducers } from "redux";

import authReducer from "./authReducer";
import notiferReducer from "./notifReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  auth: authReducer,
  notif: notiferReducer,
  ui: uiReducer
});
