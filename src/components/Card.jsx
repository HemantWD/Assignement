import React from "react";

const Card = ({ title, content, children }) => {
  return <div className="bg-white p-6 rounded-lg shadow-2xl ">{children}</div>;
};

export default Card;
