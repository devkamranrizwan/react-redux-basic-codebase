import { combineReducers } from "redux";
import counter from "./counterReducer";

const reducers = () =>
  combineReducers({
    counter,
  });

export const rootReducer = () => (state, action) => {
  return reducers()(state, action);
};

export default rootReducer;
