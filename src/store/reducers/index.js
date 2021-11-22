import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  // middleware.push(createLogger());
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
