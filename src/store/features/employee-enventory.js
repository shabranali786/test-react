import { createSlice } from "@reduxjs/toolkit";
const employeeEnventorySlice = createSlice({
  name: "employeeEnventory",
  initialState: {
    employeeData: [],
    inventoryData: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeData.push(action.payload);
    },
    addinventory: (state, action) => {
      state.inventoryData.push(action.payload);
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
} = employeeEnventorySlice.actions;
export default employeeEnventorySlice;
