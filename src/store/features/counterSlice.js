import { createSlice } from "@reduxjs/toolkit";
const factoryName = createSlice({
  name: "factory-manager",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = factoryName.actions;
export default factoryName.reducer;
