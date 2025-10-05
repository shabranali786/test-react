import { configureStore } from "@reduxjs/toolkit";
import employeeEnventorySlice from "./features/employee-enventory";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const configPersist = {
  key: "employeeEnventory",
  storage,
};
const persistedReducer = persistReducer(
  configPersist,
  employeeEnventorySlice.reducer
);
const store = configureStore({
  reducer: {
    employeeEnventory: persistedReducer,
  },
});
const persistor = persistStore(store);
export { persistor, store };
