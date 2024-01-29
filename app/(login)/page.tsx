import Hero from "./_components/Hero";
import SignIn from "./_components/SignIn";

const LoginPage = () => {
  return (
    <div className="flex w-lvw h-lvh bg-background">
      <div className="flex w-full h-lvh overflow-x-hidden">
        <Hero />
        <SignIn />
      </div>
    </div>
  );
};
export default LoginPage;
