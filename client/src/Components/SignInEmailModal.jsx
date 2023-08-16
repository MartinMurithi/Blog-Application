import React, { forwardRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SignInEmailModal = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dialogId = "id";

  const handleCloseDialog = () => {
    if (ref.current) {
      ref.current.close();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.close();
    }
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <dialog
        id={dialogId}
        ref={ref}
        className="h-screen w-screen font-serif md:w-[40%] outline-none"
      >
        <AiOutlineClose
          onClick={handleCloseDialog}
          className="text-2xl mx-3 ml-auto my-4 cursor-pointer "
        />

        <section className="h-[85vh] flex flex-col justify-center items-center">
          <h5 className="text-2xl py-10">Sign In with email</h5>
          <form
            method="dialog"
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-center items-center"
          >
            <label htmlFor="email" className="">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border-black border-b-[1px] outline-none w-60 text-center text-sm mt-6"
            />

            <label htmlFor="Your password" className="pt-8">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="border-black border-b-[1px] outline-none w-60 text-center text-sm mt-6"
            />

            <button
              type="submit"
              className="bg-black px-14 py-2 rounded-full my-10 text-white"
            >
              Continue
            </button>
          </form>
        </section>
      </dialog>
    </>
  );
});
export default SignInEmailModal;
