"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";
import { Header } from "./Header";
import { Button } from "./Button";

export const StepOne = ({
  currentStep,
  nextStep,
  form,
  setForm,
  errors,
  setErrors,
}) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty";

    if (!/^[a-zA-Z]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "Last name cannot be empty";

    if (!/^[a-zA-Z ]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = (value) => {
    if (value === "") return "Username cannot be empty";

    if (value === "banana")
      return "This username is already taken. Please choose another one.";
  };

  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) ||
      isLastNameValid(form.lastname) ||
      isUserNameValid(form.username)
    );
  };
  return (
    <div className="space-y-5">
      <Header />
      <div>
        <Textfield
          value={form.firstname}
          onChange={(e) => {
            setErrors({
              ...errors,
              firstname: isFirstNameValid(e.target.value),
            });
            setForm({ ...form, firstname: e.target.value });
          }}
          error={errors.firstname}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <Textfield
          value={form.lastname}
          onChange={(e) => {
            setErrors({
              ...errors,
              Lastname: isLastNameValid(e.target.value),
            });
            setForm({ ...form, lastname: e.target.value });
          }}
          error={errors.Lastname}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <Textfield
          value={form.username}
          onChange={(e) => {
            setErrors({
              ...errors,
              Username: isUserNameValid(e.target.value),
            });

            setForm({ ...form, username: e.target.value });
          }}
          error={errors.Username}
          required={true}
          label="Username"
          placeholder="boldoo247..."
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-full">
          <Button
            stepCount={currentStep}
            nextStep={nextStep}
            disabled={isHavingError()}
          />
        </div>
      </div>
    </div>
  );
};
