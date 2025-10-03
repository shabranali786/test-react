import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/features/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //   console.log(dispatch);
  return (
    <>
      <button onClick={() => dispatch(increment())}>Click +</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Click -</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
};

export default Counter;
