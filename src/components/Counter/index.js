import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter, resetCounter } from "../../redux/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <h2>Counter App Using Redux</h2>
      <div>
        <input type='text' value={count} readOnly />
        <div>
          <button type='button' onClick={() => dispatch(increaseCounter())}>
            Add
          </button>
          <button type='button' onClick={() => dispatch(decreaseCounter())}>
            Subtract
          </button>
          <button type='button' onClick={() => dispatch(resetCounter())}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
