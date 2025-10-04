import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.shopName.count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;
