import { configureStore } from "@reduxjs/toolkit";
import factoryName from "./features/counterSlice";

const store = configureStore({
  reducer: {
    shopName: factoryName,
  },
});

export default store;
