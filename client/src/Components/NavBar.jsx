import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../redux/api/apiSlice";
import { removeUserInfo } from "../redux/api/authSlice";
import Logo from "./Logo";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [handleLogOutApiCall, { isLoading }] = useLogoutUserMutation();

  const handleLogOut = async () => {
    try {
      await handleLogOutApiCall().unwrap();
      dispatch(removeUserInfo());
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <nav className="bg-veryLightGray flex justify-between items-center py-5 px-4">
        <Logo />
        <div className=" hidden md:flex items-center space-x-6 text-sm font-serif pr-5">
          {userInfo ? (
            <>
              <NavLink
                to={"/about"}
                className={"hover:border-b-4 border-green"}
              >
                About Us
              </NavLink>

              <NavLink
                to={"/articles"}
                className={"hover:border-b-4 border-green"}
              >
                Articles
              </NavLink>

              <NavLink
                to={"/write"}
                className={"hover:border-b-4 border-green"}
              >
                Write
              </NavLink>
              <p
                onClick={handleLogOut}
                className={"hover:border-b-4 border-green px-2"}
              >
                LogOut
              </p>
            </>
          ) : (
            <>
              <NavLink to={"/"} className={"hover:border-b-4 border-green"}>
                Home
              </NavLink>

              <NavLink
                to={"/about"}
                className={"hover:border-b-4 border-green"}
              >
                About Us
              </NavLink>

              <NavLink
                to={"/articles"}
                className={"hover:border-b-4 border-green"}
              >
                Articles
              </NavLink>

              <NavLink
                to={"/write"}
                className={"hover:border-b-4 border-green"}
              >
                Write
              </NavLink>

              <NavLink
                to={"/signIn"}
                className={"hover:border-b-4 border-green"}
              >
                Sign In
              </NavLink>

              <NavLink
                to={"/register"}
                className="bg-green rounded-full px-4 py-2 text-white"
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden">
          {userInfo ? (
            <>
              <NavLink
                to={"/articles"}
                className={"hover:border-b-4  border-green px-2"}
              >
                Articles
              </NavLink>

              <NavLink
                to={"/write"}
                className={"hover:border-b-4 border-green px-2"}
              >
                Write
              </NavLink>

              <p
                onClick={handleLogOut}
                className={"hover:border-b-4 border-green px-2"}
              >
                LogOut
              </p>
            </>
          ) : (
            <>
              <NavLink
                to={"/register"}
                className="bg-green rounded-full px-4 py-2 text-white text-sm "
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
{
  /* <div className="text-1xl cursor-pointer">
          <AiOutlineMenu />
        </div> */
}
