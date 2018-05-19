import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'

import { loadState } from "../utils/localStorage";

import state from "./reducers";

const persistedState = loadState();

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(reduxThunk),
  applyMiddleware(logger),
)(createStore);

const store = createStoreWithMiddleware(state, persistedState);

export default store;
