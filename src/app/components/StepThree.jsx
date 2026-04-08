"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { Back } from "./Back";
import { Textfield } from "./Textfield";
import { ImageField } from "./ImageField";

export const StepThree = ({
  prevStep,
  nextStep,
  form,
  setForm,
  currentStep,
  errors,
  setErrors,
}) => {
  const isBirthdayValid = (value) => {
    if (value === "") {
      setErrors({ ...errors, birthday: "Birthday cannot be empty" });
      return false;
    } else {
      return true;
    }
  };
  const isImageValid = (value) => {
    if (value === "") {
      setErrors({ ...errors, image: "Profile image cannot be empty" });
      return false;
    } else {
      return true;
    }
  };
  const isHavingError = () => {
    const birthdayError = isBirthdayValid(form.birthday);
    const imageError = isImageValid(form.image);
    return birthdayError && imageError;
  };

  const handleNext = () => {
    if (isHavingError() === false) {
    } else {
      nextStep();
    }
  };
  console.log(form);

  return (
    <div>
      <div className=" w-97.5   justify-center items-center gap-4">
        <Header />
        <Textfield
          type="date"
          value={form.birthday}
          onChange={(e) => {
            setErrors({
              ...errors,
              birthday: isBirthdayValid(e.target.value),
            });
            setForm({ ...form, birthday: e.target.value });
          }}
          error={errors.birthday}
          label="Birthday"
          placeholder="2024/01/01..."
        />
        <ImageField
          value={form.image}
          onChange={(e) => {
            const imageValue = URL.createObjectURL(e.target.files[0]);
            setForm({ ...form, image: imageValue });
            setrequiredPin({ ...requiredPin, image: true });
          }}
          error={errors.image}
          onCancel={() => {
            setForm({ ...form, image: "" });
          }}
          label="Profile Image"
        />
      </div>

      <div className="flex gap-4 my-10">
        <Back onClick={prevStep} />
        <Button stepCount={currentStep} nextStep={handleNext} />
      </div>
    </div>
  );
};
