import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/features/user_product";

const Home = () => {
  const dispatch = useDispatch();
  const [isuser, setuser] = useState({
    userName: "",
  });
  const inputChange = (e) => {
    setuser({ ...isuser, [e.target.name]: e.target.value });
    // console.log(isuser);
  };
  const formsubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        userName: isuser.userName,
      })
    );
    setuser({ userName: "" });
  };
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-5">
        <form className="p-5 shadow-2xl rounded-2xl" onSubmit={formsubmit}>
          <h1 className=" text-2xl font-bold mb-3">Add user</h1>
          <input
            type="text"
            className="border rounded-md bg-white w-full p-3"
            placeholder="Add user"
            onChange={inputChange}
            name="userName"
          />
          <button className="bg-blue-200 text-blue-600 px-3 py-2 mt-4 rounded-lg cursor-pointer">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
