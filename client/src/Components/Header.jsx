import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header() {
  return (
    <>
      <header className=" h-80 flex bg-headerImg bg-gray-500  bg-blend-multiply bg-cover bg-no-repeat md:h-imgHeaderHeight">
        <section className="max-w-md text-white flex flex-col justify-center ml-4 mr-2 space-y-5 md:max-w-xl md:ml-10">
          <h2 className="font-bold text-2xl md:text-4xl ">
            Join the <span className="hover:text-green">TechBlogr</span> and
            conquer the tech world together!
          </h2>
          <p className="text-sm md:text-xl">
            Discover the latest in technology, coding, data science, and
            cybersecurity. Stay informed, inspired, and empowered with our
            insightful tech blogs.
          </p>
          <div className="flex items-center space-x-1">
            <Link to={'articles'} className="sm:hover:underline md:bg-green md:rounded-md md:px-4 md:py-2 text-white">
              Read Articles
            </Link>
            <AiOutlineArrowRight className="text-lg mt-1 md:hidden" />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
