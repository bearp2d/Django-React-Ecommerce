import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import "./style.css";

import store from "./redux/store";
import App from "./components/App";

render(
  <Provider store={store}>
    <SnackbarProvider preventDuplicate>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
