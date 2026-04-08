import React, { Children } from "react";

export const Button = ({ nextStep, stepCount, disabled, onClick }) => {
  return (
    <button
      onClick={onClick || nextStep}
      disabled={disabled}
      className=" cursor-pointer bg-black w-full h-12 flex justify-center items-center text-white rounded-[10px] disabled:opacity-30"
    >
      Continue {stepCount}/3
    </button>
  );
};
