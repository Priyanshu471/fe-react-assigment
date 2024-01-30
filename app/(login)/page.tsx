"use client";
import Hero from "./_components/Hero";
import SignIn from "./_components/SignIn";
import { useEffect, useState } from "react";
const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="flex w-lvw h-lvh bg-background">
      <div className="flex w-full h-lvh overflow-x-hidden">
        <div className={isMobile ? "hidden" : "block"}>
          <Hero />
        </div>
        <SignIn isMobile={isMobile} />
      </div>
    </div>
  );
};
export default LoginPage;
