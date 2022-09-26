import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../types";
const initialState = {
  count: 0,
};

const counterReducer = function counter(state = initialState, action) {
  debugger;
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    case RESET_COUNTER:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
