import React, { useRef } from "react";
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import GoogleIcon from "../assets/Images/GoogleIcon.png";
import RegisterEmailModal from "../Components/RegisterEmailModal";

function Register() {
  const dialogRef = useRef();

  const handleRegisterWithEmail = () => {
    if (dialogRef.current) {
      const dialogId = dialogRef.current;
      dialogId.showModal();
    }
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10">
        <h4 className="text-xl my-6 font-serif font-bold tracking-wide">
          Join Tech Blogr.
        </h4>
        {/* Register options */}
        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <img
            src={GoogleIcon}
            alt="Google Icon"
            className="w-6 bg-white bg-blend-multiply"
          />
          <p className="font-serif ">Sign up with Google</p>
        </div>

        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <AiFillGithub className="text-3xl" />
          <p className="font-serif ">Sign up with Github</p>
        </div>

        <div className="flex items-center gap-6 border border-lightGray px-10  py-2 rounded-full my-4 cursor-pointer">
          <AiFillFacebook className="text-3xl text-blue-800" />
          <p className="font-serif ">Sign up with Facebook</p>
        </div>

        <div className="flex items-center gap-6 border border-lightGray px-12  py-2 rounded-full my-4 cursor-pointer" onClick={handleRegisterWithEmail}>
          <AiOutlineMail className="text-3xl" />
          <p className="font-serif ">Sign up with Email</p>
        </div>
      </section>
      <RegisterEmailModal ref={dialogRef}/>
    </>
  );
}

export default Register;
