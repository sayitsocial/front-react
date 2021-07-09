import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();

// document.addEventListener( // disable right-click
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
