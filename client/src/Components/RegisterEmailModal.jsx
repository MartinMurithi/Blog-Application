import React, { forwardRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRegisterUserMutation } from "../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";

const RegisterEmailModal = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [handleRegister, { isError, error, isLoading }] = useRegisterUserMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dialogId = "id";

  const handleCloseDialog = () => {
    if (ref.current) {
      ref.current.close();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleRegister({ email, password }).unwrap();
      if (ref.current) {
        ref.current.close();
      }
      setEmail("");
      setPassword("");
      navigate("/signIn");
    } catch (err) {
      console.log(err?.data?.error);
      // console.log(err.message || error);
    }
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
          <h5 className="text-2xl py-10">Sign Up with email</h5>
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

            {isError && (
              <p className="text-red-600 font-semibold text-sm text-start mt-4">
                {error?.data?.error}
              </p>
            )}
            <button
              type="submit"
              className="bg-black px-14 py-3 rounded-full my-10 text-white"
            >
              {isLoading ? "Loading...." : "Continue"}
            </button>
          </form>
        </section>
      </dialog>
    </>
  );
});
export default RegisterEmailModal;
