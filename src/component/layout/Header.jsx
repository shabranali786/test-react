import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </div>
    </>
  );
};

export default Header;
