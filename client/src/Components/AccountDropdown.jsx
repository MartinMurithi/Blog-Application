import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../redux/api/apiSlice";
import { removeUserInfo } from "../redux/api/authSlice";

const AccountDropdown = ({closeDropDown}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [handleLogOutApiCall, { isLoading }] = useLogoutUserMutation();

  const _id = userInfo?.user?._id;
  console.log(userInfo?.user?._id);
  
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
    <div className="flex flex-col items-center ">
      <div className="w-[100%] flex flex-col items-center justify-center gap-4 pl-4 py-3 shadow-xl absolute bg-veryLightGray">
        <NavLink to={"/useraccount"} onClick={closeDropDown} className="hover:border-green hover:border-b-2">Account</NavLink>
        <NavLink to={"/dashboard"} onClick={closeDropDown} className="hover:border-green hover:border-b-2">Dashboard</NavLink>
        <NavLink to={"/write"} onClick={closeDropDown} className="hover:border-green hover:border-b-2">Write</NavLink>
        {/* <NavLink to={"/readinglist"} onClick={closeDropDown} className="hover:border-green hover:border-b-2">Reading List</NavLink> */}
        <NavLink to={"/settings"} onClick={closeDropDown} className="hover:border-green hover:border-b-2">Settings</NavLink>
        <button onClick={() => { handleLogOut(); closeDropDown(); }} className="border-none outline-none hover:border-green hover:border-b-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountDropdown;
