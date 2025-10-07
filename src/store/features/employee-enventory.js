import { createSlice } from "@reduxjs/toolkit";
const employeeEnventorySlice = createSlice({
  name: "employeeEnventory",
  initialState: {
    employeeData: [],
    inventoryData: [],
    Mode: "light"
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeData.push(action.payload);
    },
    addinventory: (state, action) => {
      state.inventoryData.push(action.payload);
    },
      theme: (state, action) => {
     state.Mode = action.payload
    },
    clearEmployeeData: (state) => {
      state.employeeData = [];
    },
    clearInventoryData: (state) => {
      state.inventoryData = [];
    },
  },
});

export const {
  addEmployee,
  addinventory,
  clearEmployeeData,
  clearInventoryData,
  theme,
} = employeeEnventorySlice.actions;
export default employeeEnventorySlice;
