// src/pages/Home.jsx — Sirf Design (Static)

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  addinventory,
  clearEmployeeData,
  clearInventoryData,
} from "../store/features/employee-enventory";

function Home() {
  const dispatch = useDispatch();
  const [isError, setError] = useState({});
  const [isEmployee, setEmployee] = useState({
    name: "",
    department: "",
  });
  const [isInventory, setInventory] = useState({
    itemName: "",
    quantity: "",
  });
  const data = useSelector((state) => state.employeeEnventory);
  const inputChange = (e) => {
    setEmployee({ ...isEmployee, [e.target.name]: e.target.value });
    setInventory({ ...isInventory, [e.target.name]: e.target.value });
    if(isError[e.target.name]){
      setError((prev) => ({...prev, [e.target.name]: ""}))
    }
    
  };
  const Validation = () => {
    const newError = {}
     if(!isEmployee.name.trim()) {
       newError.name = "name is Required"
     } else if (isEmployee.name.trim().length < 3) {
       newError.name = "alleast 3 Charators of Alphabates"
     }
      if (!isEmployee.department.trim()){
      newError.department = "department is required"
     }
     return newError;
  }
  const formSubmit = (formType, e) => {
    e.preventDefault();
    console.log(formType);
    const validationErrors = Validation();
    console.log(Object.keys(validationErrors))
    if(Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return
    }
    // console.log(d);
    if (formType === "employeeform") {
      if (isEmployee.name === "" || isEmployee.department === "") return;

      dispatch(
        addEmployee({
          name: isEmployee.name,
          department: isEmployee.department,
        })
      );

      setEmployee({
        name: "",
        department: "",
      });
    } else if (formType === "inventoryform") {
      if (isInventory.itemName === "" || isInventory.quantity === "") return;
      dispatch(
        addinventory({
          itemName: isInventory.itemName,
          quantity: isInventory.quantity,
        })
      );
      setInventory({
        itemName: "",
        quantity: "",
      });
    }
  };
  // const formSubmitInventory = (e) => {
  //   e.preventDefault();
  // };
  const resetButton = (items) => {
    if (items === "resetEmployee") {
      dispatch(clearEmployeeData());
    } else if (items === "resetInventory") {
      dispatch(clearInventoryData());
    }
  };


  return (
    <div className="min-h-screen  p-4 md:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Employee & Inventory Manager
        </h1>
        <p className="text-gray-600 mt-2">
          Add and manage your team and stock in one place
        </p>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* 👨‍💼 Employees Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              👨‍💼 Employees
            </h2>
            <button
              className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"
              onClick={(e) => resetButton("resetEmployee", e)}
            >
              Clear All
            </button>
          </div>

          {/* Add Employee Form (Static) */}
          <form
            className="space-y-3 mb-6"
            onSubmit={(e) => formSubmit("employeeform", e)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ali Khan"
                className={`w-full px-3 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isError.name ? 'border-red-600': 'border-gray-300'}`}
                value={isEmployee.name}
                name="name"
                onChange={inputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                placeholder="e.g. Marketing"
                className={`w-full px-3 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isError.department ? 'border-red-600': 'border-gray-300'}`}
                value={isEmployee.department}
                name="department"
                onChange={inputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              ➕ Add Employee
            </button>
          </form>

          {/* Employees List (Static Example) */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Team Members:</h3>
            {data.employeeData.length == 0 ? (
              <div className="text-center text-gray-500 text-sm py-2">
                — No more employees —
              </div>
            ) : (
              data.employeeData.map((items, i) => {
                return (
                  <>
                    <div className="bg-gray-50 p-3 rounded-lg" key={i}>
                      <p className="font-medium">{items.name}</p>
                      <p className="text-sm text-gray-600">
                        {items.department}
                      </p>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>

        {/* 📦 Inventory Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              📦 Inventory
            </h2>
            <button
              className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"
              onClick={(e) => resetButton("resetInventory", e)}
            >
              Clear All
            </button>
          </div>

          {/* Add Product Form (Static) */}
          <form
            className="space-y-3 mb-6"
            onSubmit={(e) => formSubmit("inventoryform", e)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                placeholder="e.g. Laptop"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="itemName"
                value={isInventory.itemName}
                onChange={inputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                placeholder="e.g. 10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="quantity"
                value={isInventory.quantity}
                onChange={inputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              ➕ Add Item
            </button>
          </form>

          {/* Inventory List (Static Example) */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Stock Items:</h3>
            {data.inventoryData.length == 0 ? (
              <div className="text-center text-gray-500 text-sm py-2">
                — No more items —
              </div>
            ) : (
              data.inventoryData.map((items, i) => {
                return (
                  <div className="bg-gray-50 p-3 rounded-lg" key={i}>
                    <p className="font-medium">{items.itemName}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {items.quantity}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
