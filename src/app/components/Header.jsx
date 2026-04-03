import React from "react";
import { Image } from "./Image";

export const Header = () => {
  return (
    <div>
      <Image />
      <h1 className="font-semibold text-2xl gap-2">Join Us! 😎</h1>
      <p className="text-lg text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
