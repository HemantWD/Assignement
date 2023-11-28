import React from "react";
import { CgMenu, CgProfile } from "react-icons/cg";
import { DiStreamline } from "react-icons/di";
import { PiSpeakerHigh } from "react-icons/pi";
import { LiaPlugSolid } from "react-icons/lia";
import { MdOutlineMessage, MdHelpOutline } from "react-icons/md";

const RightPanel = () => {
  return (
    <div className="flex flex-col w-16 bg-slate-200 h-screen justify-between text-gray-700 p-4">
      <div className="flex flex-col items-center mb-6 gap-5">
        <CgMenu size={24} />
        <CgProfile size={20} />
        <DiStreamline size={20} />
        <PiSpeakerHigh size={20} />
        <LiaPlugSolid size={20} />
      </div>
      <div className="text-sm">
        <MdOutlineMessage size={20} />
        <MdHelpOutline size={20} />
      </div>
    </div>
  );
};

export default RightPanel;
