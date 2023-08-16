import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <nav className="bg-veryLightGray flex justify-between items-center py-5 px-4">
        <Logo/>
        <div className=" hidden md:flex items-center space-x-6 text-sm font-serif pr-5">
          <NavLink to={'/'} className={'hover:border-b-4 border-green'}>Home</NavLink>
          <NavLink to={'/about'}  className={'hover:border-b-4 border-green'}>About Us</NavLink>
          <NavLink to={'/articles'}  className={'hover:border-b-4 border-green'}>Articles</NavLink>
          <NavLink to={'/write'}  className={'hover:border-b-4 border-green'}>Write</NavLink>
          <NavLink to={'/signIn'}  className={'hover:border-b-4 border-green'}>Sign In</NavLink>
          <NavLink to={'/register'} className="bg-green rounded-full px-4 py-2 text-white">
            Get Started
          </NavLink>
        </div>

        <div className="md:hidden">
          <NavLink to={'/register'} className="bg-green rounded-full px-4 py-2 text-white text-sm ">
            Get Started
          </NavLink>
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
