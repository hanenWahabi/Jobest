import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import reducers from "../reducers";
const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware, ReduxThunk);

export default (data = {}) => {
  const store = createStore(reducers, data, middleware);
  return store;
};
