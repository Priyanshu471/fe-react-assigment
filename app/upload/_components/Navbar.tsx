import Image from "next/image";
import bg from "../../_images/smallbg.svg";
import upload from "../../_images/upload.svg";
import Notification from "../../_images/Notification.svg";
import calander from "../../_images/calander.svg";
import schedule from "../../_images/Schedule.svg";
import settings from "../../_images/Settings.svg";
import invoice from "../../_images/Invoice.svg";
import dashIcon from "../../_images/dashIcon.svg";
import Dashboard from "../../_images/Dashboard.svg";
import close2 from "../../_images/plus.svg";
import logo2 from "../../_images/logo2.svg";
import { useState } from "react";

interface NavbarProps {
  toggle: boolean;
  menuToggle: () => void;
  isMobile: boolean;
}
const tabs = [
  { name: "upload", icon: upload },
  { name: "invoice", icon: invoice },
  { name: "schedule", icon: schedule },
  { name: "calander", icon: calander },
  { name: "notification", icon: Notification },
  { name: "setting", icon: settings },
];
const Navbar = ({ toggle, menuToggle, isMobile }: NavbarProps) => {
  const [tab, setTab] = useState<string>("upload");
  return (
    <div
      className={
        toggle
          ? isMobile
            ? `absolute w-3/4 bg-white h-lvh pt-8 rounded-tl-none rounded-bl-none rounded-[10px]`
            : ""
          : isMobile
          ? `hidden`
          : ` w-60 h-full p-8 flex flex-col bg-white`
      }
    >
      <div className="flex justify-around items-center mb-8">
        <Image className="self-center" src={logo2} alt="logo2" />
        <Image
          onClick={menuToggle}
          className={toggle ? "block pointer" : "hidden"}
          src={close2}
          alt="close icon"
        />
      </div>
      <div className="w-full h-16 flex items-center cursor-pointer">
        <Image className="ml-8" src={dashIcon} alt="dashicon" />
        <Image className="ml-3" src={Dashboard} alt="dashboard" />
      </div>
      {tabs.map((ele, i) => (
        <div
          key={i}
          className="w-full h-16 flex items-center cursor-pointer"
          onClick={() => setTab(ele.name)}
        >
          {ele.name === tab && (
            <Image className="absolute left-0" src={bg} alt="bg" />
          )}
          <Image className="ml-8 text-blue-800" src={ele.icon} alt={ele.name} />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
