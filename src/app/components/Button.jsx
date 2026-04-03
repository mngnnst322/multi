import React, { Children } from "react";

export const Button = ({ handleNext, handleBack, stepCount = 0 }) => {
  return (
    <div className="flex gap-1 pt-5">
      <button
        onClick={handleNext}
        className=" bg-black w-full h-12 flex justify-center items-center text-white rounded-2xl"
      >
        Continue {stepCount + 1}/3
      </button>
      {stepCount === 2 && (
        <button
          onClick={handleBack}
          className=" bg-black w-full h-12 flex justify-center items-center text-white rounded-2xl"
        >
          Back
        </button>
      )}
    </div>
  );
};
