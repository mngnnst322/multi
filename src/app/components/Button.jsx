import React, { Children } from "react";

export const Button = ({ nextStep, stepCount, disabled }) => {
  return (
    <button
      onClick={nextStep}
      disabled={disabled}
      className=" cursor-pointer bg-black w-full h-12 flex justify-center items-center text-white rounded-[10px]"
    >
      Continue {stepCount}/3
    </button>
  );
};
