import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import throttle from "lodash.throttle";

import App from "./App";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

import { saveState } from "./utils/localStorage";

import "./styles/normalize.css";
import "./styles/base.css";

// const state = JSON.parse(localStorage.getItem("state"));

// if (state) {
//   setAuthToken(state.auth.token);
// }

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth
    });
  }, 1000)
);

const Index = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
