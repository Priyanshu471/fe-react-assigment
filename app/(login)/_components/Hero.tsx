import Image from "next/image";
import logo1 from "../../_images/logo1.png";
import SocialLinks from "../../_images/SocialLinks.svg";
const Hero = () => {
  return (
    <div className="flex relative w-1/2 h-full overflow-hidden">
      <div className="bg-primary absolute rotate-10 -top-72 -left-28 w-full h-2lvh"></div>
      <div className="flex flex-col w-full h-lvh absolute p-10">
        <div className="flex w-4/5 h-1/6">
          <Image className="w-14 h-14" src={logo1} alt="logo" />
        </div>
        <div className="flex justify-center items-center relative w-[85%] h-full text-7xl text-white font-semibold">
          <span>BASE</span>
        </div>
        <div className="flex justify-center items-center w-5/6 h-[10%]">
          <div className="flex justify-between items-center relative w-60 h-20">
            <Image
              className="cursor-pointer"
              src={SocialLinks}
              alt="social links"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
