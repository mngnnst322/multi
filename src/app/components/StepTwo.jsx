"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";
import { Header } from "./Header";
import { Button } from "./Button";
import { Back } from "./Back";

export const StepTwo = ({
  prevStep,
  nextStep,
  form,
  setForm,
  currentStep,
  errors,
  setErrors,
  setrequiredPin,
  requiredPin,
}) => {
  const isEmailValid = (value) => {
    if (value === "") return "Email cannot be empty";

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value))
      return "Email is not valid";
  };
  const isPhonenumberValid = (value) => {
    if (value === "") return "Phonenumber  cannot be empty";

    if (!/^[89]\d{7}$/.test(value))
      return "Please provide a valid phone number.";
  };
  const isPasswordValid = (value) => {
    if (value === "") return "Please enter a valid phone number.";

    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
        value,
      )
    )
      return "Password must include letters and numbers.";
  };
  const isConfirmpasswordvalid = (value) => {
    if (value === "") return "Confirmpassword cannot be empty";

    if (value !== form.password)
      return "Passwords do not match. Please try again.";
  };
  const isHavingError = () => {
    return (
      isEmailValid(form.email) ||
      isPhonenumberValid(form.phonenumber) ||
      isPasswordValid(form.password) ||
      isConfirmpasswordvalid(form.confirmpassword)
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <Header />
        <Textfield
          value={form.email}
          onChange={(e) => {
            setrequiredPin({ ...requiredPin, email: true });
            setErrors({
              ...errors,
              email: isEmailValid(e.target.value),
            });
            setForm({ ...form, email: e.target.value });
          }}
          error={errors.email}
          required={true}
          label="Email"
          placeholder="..."
          requiredPin={requiredPin.email}
        />
        <Textfield
          value={form.phonenumber}
          onChange={(e) => {
            setrequiredPin({ ...requiredPin, phonenumber: true });
            setErrors({
              ...errors,
              phonenumber: isPhonenumberValid(e.target.value),
            });
            setForm({ ...form, phonenumber: e.target.value });
          }}
          error={errors.phonenumber}
          required={true}
          label="Phone number"
          placeholder="..."
          requiredPin={requiredPin.phonenumber}
        />
        <Textfield
          value={form.password}
          onChange={(e) => {
            setrequiredPin({ ...requiredPin, password: true });
            setErrors({
              ...errors,
              password: isPasswordValid(e.target.value),
            });
            setForm({ ...form, password: e.target.value });
          }}
          error={errors.password}
          required={true}
          type="password"
          label="Password"
          placeholder="..."
          requiredPin={requiredPin.password}
        />
        <Textfield
          value={form.confirmpassword}
          onChange={(e) => {
            setrequiredPin({ ...requiredPin, confirmpassword: true });
            setErrors({
              ...errors,
              confirmpassword: isConfirmpasswordvalid(e.target.value),
            });
            setForm({ ...form, confirmpassword: e.target.value });
          }}
          error={errors.confirmpassword}
          required={true}
          type="password"
          label="Confirm Password"
          placeholder="..."
          requiredPin={requiredPin.confirmpassword}
        />
      </div>
      <div className="flex w-97.5  justify-center items-center gap-4">
        <Back onClick={prevStep} />
        <Button
          stepCount={currentStep}
          nextStep={nextStep}
          disabled={isHavingError()}
        />
      </div>
    </div>
  );
};
