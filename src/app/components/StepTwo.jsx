"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";
import { Header } from "./Header";
import { Button } from "./Button";
import { Back } from "./Back";

export const StepTwo = ({ prevStep, nextStep, form, setForm }) => {
  const [submitted, setSubmitted] = useState("");
  const [Email, setEmailName] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const isEmailValid = () => {
    if (Email === "") return "Email cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(Email)) return "Email cannot be empty";
  };
  const isPhonenumberValid = () => {
    if (Phonenumber === "") return "Phonenumber  cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(Phonenumber))
      return "Phonenumber cannot be empty";
  };
  const isPasswordValid = () => {
    if (Password === "") return "Password cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(Password)) return "Password cannot be empty";
  };
  const isConfirmpasswordvalid = () => {
    if (Confirmpassword === "") return "Confirmpassword cannot be empty";

    if (!/^[a-zA-Z ]{2,30}$/.test(Confirmpassword))
      return "Confirmpasswordcannot be empty";
  };
  const isHavingError = () => {
    return (
      isEmailValid(form.firstname) ||
      isPhonenumberValid() ||
      isPasswordValid() ||
      isConfirmpasswordvalid
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <Header />
        <Textfield
          value={Email}
          onChange={(e) => {
            setEmailName(e.target.value);
          }}
          label="Email"
          placeholder="Placeholder"
          error={submitted ? isEmailValid() : ""}
          type="text"
        />
        <Textfield
          value={Phonenumber}
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
          label="Phone number"
          placeholder="Placeholder"
          error={submitted ? isPhonenumberValid() : ""}
          type="text"
        />
        <Textfield
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          placeholder="Placeholder"
          error={submitted ? isPasswordValid() : ""}
          type="text"
        />
        <Textfield
          value={Confirmpassword}
          onChange={(e) => {
            setConfirmpassword(e.target.value);
          }}
          label="Confirm password"
          placeholder="Placeholder"
          error={submitted ? isConfirmpasswordvalid() : ""}
          type="text"
        />
      </div>
      <div className="flex w-97.5  justify-center items-center gap-4">
        <Back onClick={prevStep} disabled={isHavingError()} />
        <Button nextStep={nextStep} />
      </div>
    </div>
  );
};
