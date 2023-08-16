import React, { useRef } from "react";
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import GoogleIcon from "../assets/Images/GoogleIcon.png";
import SignInEmailModal from "../Components/SignInEmailModal";

function SignInOptions() {
  const dialogRef = useRef();

  const handleRegisterWithEmail = () => {
    if (dialogRef.current) {
      const dialogId = dialogRef.current;
      dialogId.showModal();
    }
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10 font-serif">
        <h4 className="text-xl my-6 font-serif font-bold tracking-wide">
          Welcome Back
        </h4>
        {/* Sigin In options */}

        {/* Google */}
        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <img
            src={GoogleIcon}
            alt="Google Icon"
            className="w-6 bg-white bg-blend-multiply"
          />
          <p className="font-serif ">Sign In with Google</p>
        </div>

        {/* Github */}
        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <AiFillGithub className="text-3xl" />
          <p className="font-serif ">Sign In with Github</p>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <AiFillFacebook className="text-3xl text-blue-800" />
          <p className="font-serif ">Sign In with Facebook</p>
        </div>

        {/* Email */}
        <div
          className="flex items-center gap-6 border border-lightGray px-12  py-2 rounded-full my-4 cursor-pointer"
          onClick={handleRegisterWithEmail}
        >
          <AiOutlineMail className="text-3xl" />
          <p className="font-serif ">Sign In with Email</p>
        </div>
      </section>
      <SignInEmailModal ref={dialogRef} />
    </>
  );
}

export default SignInOptions;
