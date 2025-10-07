import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { theme } from "../../store/features/employee-enventory";

const Header = () => {
  const dispatch = useDispatch();
  const {Mode} = useSelector((state) => state.employeeEnventory);
  console.log(Mode);
 const ThemeToggle = () => {
  const newTheme = Mode === "light" ? "dark" : "light";
  dispatch(theme(newTheme))
}

useEffect(() => {
document.body.classList.toggle('dark', Mode === 'dark')
},[Mode])
 

  return (
    <>
      <div>
        <ul className=" flex items-center gap-10 justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/user">Use</Link>
          </li>
          <button className=" cursor-pointer" onClick={ThemeToggle}>
            {Mode === 'light' ? "Dark": "Light"}
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;
