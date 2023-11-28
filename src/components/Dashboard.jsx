// Dashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import emailIcon from "../assets/email.jpg";
import RightPanel from "./RightPanel";

const Dashboard = () => {
  const [isSuppressedEmailActive, setSuppressedEmailActive] = useState(false);

  const handleSuppressedEmailClick = () => {
    setSuppressedEmailActive(!isSuppressedEmailActive);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-xl font-bold mb-6">Suppression List</h1>
        <div className="mb-8">
          <h2
            className={`text-base mb-2 font-bold ${
              isSuppressedEmailActive
                ? "text-blue-500 underline"
                : "cursor-pointer"
            }`}
            onClick={handleSuppressedEmailClick}
          >
            Suppressed Email
          </h2>
          {isSuppressedEmailActive ? (
            <Card>
              <div className="flex flex-col items-center">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="mx-auto mb-4 h-72"
                />
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  Add Email
                </button>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
      <RightPanel />
    </div>
  );
};

export default Dashboard;
