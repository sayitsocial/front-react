import { createStore } from "redux";
import rootReducer from "./rootreducer";

const store = createStore(
  rootReducer,
  // TODO: Remove in production
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
