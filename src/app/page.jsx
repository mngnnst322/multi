"use client";
import { Image } from "./components/Image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { Textfield } from "./components/Textfield";
import { Header } from "./components/Header";
import { useState } from "react";
import { Button } from "./components/Button";
import { StepThree } from "./components/StepThree";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const CurrentStepComponent = [StepOne, StepTwo, StepThree][currentStep];
  return (
    <div className="w-full h-screen  flex  justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 h-min-163.75 bg-white rounded-lg p-8 shadow-2xl">
        <Header />
        <div className="flex flex-col justify-between">
          <div className="w-full">
            <CurrentStepComponent />
          </div>
          <div className="w-full">
            <Button
              stepCount={currentStep}
              handleNext={() => {
                nextStep();
                if (
                  isFirstNameValid() ||
                  isLastNameValid() ||
                  isFullNameValid()
                )
                  return;
                {
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
