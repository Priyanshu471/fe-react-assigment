import Image from "next/image";
import Link from "next/link";
import GoogleSignIn from "../../_images/GoogleSignIn.svg";
import AppleSignIn from "../../_images//AppleSignIn.svg";
import logo from "../../_images/logo3.svg";
import SocialLinks from "../../_images/SocialLinks-dark.svg";

interface SignInProps {
  isMobile: boolean;
}
const SignIn = ({ isMobile }: SignInProps) => {
  return (
    <div
      className={
        isMobile
          ? "w-full justify-start items-start p-0 flex flex-col h-full"
          : "flex flex-col items-center justify-center w-1/2 h-full px-[6%]"
      }
    >
      <div className={isMobile ? "flex w-full h-32 p-6 bg-primary" : "hidden"}>
        <div className="relative w-24 ">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div
        className={
          isMobile
            ? "flex w-full justify-center p-6 flex-col h-fit"
            : "flex flex-col w-3/4 h-fit"
        }
      >
        <span className="font-bold text-4xl mb-2">Sign In</span>
        <span className="text-sm mb-6">Sign in to your account</span>
        <div className="flex justify-between mb-6 w-full">
          <div className="w-[45%] h-8 cursor-pointer relative">
            <Image src={GoogleSignIn} alt="google" width={300} />
          </div>
          <div className="w-[45%] h-8 cursor-pointer relative">
            <Image src={AppleSignIn} alt="apple" width={300} />
          </div>
        </div>
        <div className="h-fit p-6 bg-white rounded-[20px] flex flex-col mb-4">
          <span className="text-lg font-normal mb-3">Email address</span>
          <input
            className="mb-8 bg-[#F5F5F5] outline-none border-none h-12 rounded-lg px-4"
            type="text"
            placeholder="Enter your email"
          />
          <span className="text-lg font-normal mb-3">Password</span>
          <input
            className="mb-8 bg-[#F5F5F5] outline-none border-none h-12 rounded-lg px-4"
            type="password"
            placeholder="Enter your password"
          />
          <span className="text-base font-normal mb-8 cursor-pointer text-[#346BD4]">
            Forgot password?
          </span>
          <Link className="flex w-full" href="/upload">
            <button className="h-12 w-full border-none bg-primary rounded-lg text-white text-base font-bold cursor-pointer">
              Sign In
            </button>
          </Link>
        </div>
        <span
          className={
            isMobile
              ? " text-lg flex flex-col gap-4 justify-center items-center"
              : "text-sm cursor-pointer self-center text-#858585"
          }
        >
          Don’t have an account?{" "}
          <span className="text-[#346BD4]">Register here</span>
        </span>
      </div>
      <div className={isMobile ? "flex w-full justify-center" : "hidden"}>
        <Image src={SocialLinks} alt="mergedIcons" />
      </div>
    </div>
  );
};

export default SignIn;
