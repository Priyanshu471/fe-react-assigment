"use client";
import Hero from "./_components/Hero";
import SignIn from "./_components/SignIn";
import { useEffect, useState } from "react";
const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else if (window.innerWidth > 640) {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex w-lvw h-lvh bg-background">
      <div className="flex w-full h-lvh overflow-x-hidden">
        {!isMobile && <Hero />}
        <SignIn isMobile={isMobile} />
      </div>
    </div>
  );
};
export default LoginPage;
