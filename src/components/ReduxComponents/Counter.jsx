// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from '../../reduxSetup';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
  );
};

export default Counter;
