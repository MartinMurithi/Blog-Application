import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import AccountDropdown from "./AccountDropdown";

function NavBar() {
  const { userInfo } = useSelector((state) => state.auth);
  const [openDropDown, setOpenDropDown] = useState(false);

  const openAccountDropdown = () => {
    setOpenDropDown((current) => !current);
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

              <button
                onClick={openAccountDropdown}
                className="border-none outline-none"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrUxWoOcFvZpXT3_3Ur1RSKF6HJJ_S13FCCgB6FDdmA&s"
                  alt=""
                  className="w-12 h-11 rounded-full"
                />
              </button>
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
      {openDropDown && <AccountDropdown />}
    </>
  );
}

export default NavBar;
{
  /* <div className="text-1xl cursor-pointer">
          <AiOutlineMenu />
        </div> */
}
