import React, { useState } from "react";
import { useSelector } from "react-redux";

const User = () => {
  const { userData } = useSelector((state) => state.form);
  console.log(userData);
  const isuser = userData.map((item) => item.userName);

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-5">
        <div className="p-5 shadow-2xl rounded-2xl">
          <h1 className=" text-2xl font-bold mb-3">User Page</h1>
          <span>{isuser}</span>
        </div>
      </div>
    </>
  );
};

export default User;
