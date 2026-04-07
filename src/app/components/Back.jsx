import React from "react";

export const Back = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white cursor-pointer w-[50%] h-12 flex justify-center items-center text-black rounded-[10px] border-2"
    >
      <p>Back</p>
    </button>
  );
};
