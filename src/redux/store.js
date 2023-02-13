import { compose, applyMiddleware, createStore } from "redux";
import { appMiddleware } from "./middlewares/app";
import { coreMiddleware } from "./middlewares/core";
import { reducers } from "./reducers";

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const configureStore = () => createStore(
  reducers, 
  composeEnhancers(applyMiddleware(
    ...appMiddleware,
    ...coreMiddleware,
  ))
);