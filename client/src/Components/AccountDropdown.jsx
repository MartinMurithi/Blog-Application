import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../redux/api/apiSlice";
import { removeUserInfo } from "../redux/api/authSlice";

const AccountDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [handleLogOutApiCall, { isLoading }] = useLogoutUserMutation();

  const _id = userInfo?.user?._id;
  const handleLogOut = async () => {
    try {
      await handleLogOutApiCall().unwrap();
      dispatch(removeUserInfo());
      navigate("/signIn");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div className="w-[12%] h-72 flex flex-col items-start justify-center gap-4 mt-2 mr-14 pl-4 py-3 shadow-xl absolute">
        <NavLink to={"/account"}>Account</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/write"}>Write</NavLink>
        <NavLink to={"/readinglist"}>Reading List</NavLink>
        <NavLink to={"/settings"}>Settings</NavLink>
        <button onClick={handleLogOut} className="border-none outline-none">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountDropdown;
