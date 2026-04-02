import React from "react";
import { Textfield } from "./Textfield";

export const StepOne = (onclick) => {
  return (
    <div className="space-y-34">
      <div>
        <Textfield
          label="firtsname"
          placeholder="Placeholder"
          error="Please provide a valid email address."
        />{" "}
        <Textfield
          label="Lastname"
          placeholder="Placeholder"
          error="Please provide a valid email address."
        />{" "}
        <Textfield
          required={true}
          label="Username"
          placeholder="Placeholder"
          error="Please provide a valid email address."
        />{" "}
      </div>
      <div>
        <button
          onClick={onclick}
          className=" bg-black w-full h-12 flex justify-center items-center text-white rounded-2xl"
        >
          Contine 1/3{" "}
        </button>
      </div>
    </div>
  );
};
