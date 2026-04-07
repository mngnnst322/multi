"use client";
import { Image } from "./components/Image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { Textfield } from "./components/Textfield";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(null);

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    birthday: "",
    image: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });
  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          birthday: "",
          image: "",
          phonenumber: "",
          password: "",
          confirmpassword: "",
        });
      }
    }
  }, [form]);

  if (!form) return null;

  return (
    <div className="w-full h-screen  flex  justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 h(-min-163.75 bg-white rounded-lg p-8 shadow-2xl">
        {currentStep === 1 && (
          <>
            <StepOne
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={currentStep}
            />{" "}
          </>
        )}
        {currentStep === 2 && (
          <>
            <StepTwo
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={currentStep}
            />{" "}
          </>
        )}
        {currentStep === 3 && (
          <>
            <StepThree
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={currentStep}
            />{" "}
          </>
        )}
        {currentStep === 4 && <StepFour />}
      </div>
    </div>
  );
}
