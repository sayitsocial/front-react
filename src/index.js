import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Switch from "./router/router";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Switch />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
