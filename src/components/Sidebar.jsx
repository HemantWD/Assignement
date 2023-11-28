import React from "react";
import { CgProfile } from "react-icons/cg";
import {
  FaHome,
  FaEnvelope,
  FaUserFriends,
  FaChartBar,
  FaClipboardList,
  FaRegNewspaper,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const navigationItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaEnvelope />, label: "Mail Agents" },
    { icon: <FaUserFriends />, label: "Domains" },
    { icon: <FaChartBar />, label: "Reports" },
    { icon: <FaClipboardList />, label: "Subscription" },
    { icon: <FaRegNewspaper />, label: "Suppression List" },
  ];
  return (
    <div className=" flex flex-col w-52 bg-sky-950 h-screen text-white p-5 ">
      <div className=" flex items-center mb-8 gap-2">
        <CgProfile />
        <h2 className=" text-xl font-bold">Technix Mail</h2>
      </div>
      <ul>
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className=" flex items-center mb-4 cursor-pointer gap-2"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="flex-grow"></div>
      <hr className="my-4 border-t-2 border-white" />
      <div className="flex justify-start items-center">
        <button className="flex items-center text-white">
          <FaCog className="mr-2" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
