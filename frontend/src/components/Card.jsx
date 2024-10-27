import React from "react";

const Card = ({details}) => {
  return (
    <div className="div h-[14em] w-[18em] bg-gray-700  text-white rounded-[1em] overflow-hidden relative group p-2 z-0">
      <h2 className="text-xl text-[#26de9a] font-semibold mb-2">Latest graphical insights</h2>
      <p>{details}</p>
    </div>
  );
};

export default Card;
