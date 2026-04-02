"use client";
import { Image } from "./components/Image";
import { StepOne } from "./components/StepOne";
import { Textfield } from "./components/Textfield";
import { Header } from "./components/Header";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="w-full h-screen  flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-2xl">
        <div className="space-y-2">
          <Header />

          <StepOne onClick={nextStep} />
        </div>
      </div>{" "}
    </div>
  );
}
