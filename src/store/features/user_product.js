import { createSlice } from "@reduxjs/toolkit";
const userProductSlice = createSlice({
  name: "facetoryData",
  initialState: {
    userData: [],
    productData: [],
    Mode: "light"
  },
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    addProduct: (state, action) => {
      state.productData.push(action.payload);
    },
  
  },
});

export const { addUser, addProduct, theme } = userProductSlice.actions;
export default userProductSlice.reducer;
