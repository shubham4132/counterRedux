import { createStore } from "redux";
import { applyMiddleware } from "redux";
import counterReducer from "./counterReducer";
import loggerMiddleware from "./loggerMiddleware";
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));
export default store;
