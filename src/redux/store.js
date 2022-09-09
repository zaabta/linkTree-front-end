import reducers from "./reducers";
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewareList = [thunk, logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(reducers, enhancer);

export default store;

