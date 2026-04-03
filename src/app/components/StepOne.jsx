"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";
import { Header } from "./Header";
import { Button } from "./Button";

export const StepOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isFirstNameValid = () => {
    if (firstName === "") return "first name cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(firstName))
      return "first name cannot be empty";
  };
  const isLastNameValid = () => {
    if (lastName === "") return "last name cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(lastName)) return "last name cannot be empty";
  };
  const isFullNameValid = () => {
    if (fullName === "") return "full name cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(lastName)) return "full name cannot be empty";
  };
  return (
    <div className="">
      <div>
        <Textfield
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          label="First name"
          placeholder="Placeholder"
          error={submitted ? isFirstNameValid() : ""}
          type="text"
        />
        <Textfield
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          label="last name"
          placeholder="Placeholder"
          error={submitted ? isLastNameValid() : ""}
          type="text"
        />
        <Textfield
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          label="Full name"
          placeholder="Placeholder"
          error={submitted ? isFullNameValid() : ""}
          type="text"
        />
      </div>
    </div>
  );
};
