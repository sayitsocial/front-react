import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import store from "./store";
import { Provider } from "react-redux";
import Switch from "./router/router";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
