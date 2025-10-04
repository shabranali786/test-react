import { useState } from "react";

// import store from "./store/store";
import "./main.css";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Master from "./component/layout/Master";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Master />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
