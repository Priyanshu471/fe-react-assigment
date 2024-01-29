"use client";
import React, { useState } from "react";
import dropIcon from "../app/_images/dropIcon.svg";
import Image from "next/image";

interface DropdownProps {
  onSelect: (data: string) => void;
  data: string[];
}

const Dropdown = ({ onSelect, data }: DropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = (txt: string) => {
    onSelect(txt);
    setShowDropdown(false);
  };

  return (
    <div
      style={{
        borderBottomLeftRadius: showDropdown ? "0" : "5px",
        borderBottomRightRadius: showDropdown ? "0" : "5px",
        padding: "0",
      }}
      className="flex justify-center items-center relative h-full w-fit rounded-md cursor-pointer select-none "
    >
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex rounded-lg border border-[#ebebeb] w-full h-full"
      >
        <p>Select Tags</p>
        <Image alt="dropdownIcon" src={dropIcon} />
      </div>

      {showDropdown && (
        <div className="absolute top-[100%] rounded-br-md rounded-bl-md bg-white z-50 border border-[#f5f5f5] rounded-[10px]">
          {data.map((item, i) => (
            <p
              className="text-black flex items-center py-3 px-4 select-none rounded-xl hover:bg-[#f5f5f5]"
              key={i}
              onClick={() => handleDropdown(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
