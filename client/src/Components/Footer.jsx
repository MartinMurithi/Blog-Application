import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="bg-black text-veryLightGray flex flex-col py-8">
        <div className='md:flex md:justify-between items-center px-4'>
          {/* Social media */}
          <section className="flex flex-col items-center ">
            <h6 className="text-lg font-bold pb-6">FOLLOW US</h6>
            <div className="flex gap-6">
              <AiOutlineFacebook className="text-2xl cursor-pointer" />
              <AiOutlineTwitter className="text-2xl cursor-pointer" />
              <AiOutlineInstagram className="text-2xl cursor-pointer" />
            </div>
          </section>
          {/* News letter */}
          <section className="flex flex-col items-center text-center py-10">
            <h5 className="text-lg py-2 tracking-wide">
              SUBSCRIBE TO OUR NEWS LETTER
            </h5>
            <p className="py-2 px-2">
              Subscribe to our news letter to receive notifications when new
              articles are uploaded
            </p>

            <form className="flex flex-col w-full py-6 px-4 ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="py-2 outline-none rounded-md px-4 text-black"
              />
              <button type="submit" className="bg-green py-2 mt-4 rounded-md">
                SUBMIT
              </button>
            </form>
          </section>
        </div>

        {/* copyright */}
        <section>
          <p className="text-center px-2 text-sm text-veryLightGray md:text-start">
            Copyright &copy; 2023 TECHBLOGR | Powered by Martin Wachira
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
