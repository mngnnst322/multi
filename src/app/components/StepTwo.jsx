"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";
import { Header } from "./Header";
import { Button } from "./Button";

export const StepTwo = () => {
  const [Email, setEmailtName] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState(false);
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
  return (
    <div className="">
      <div>
        <Textfield
          value={Email}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          label="Email"
          placeholder="Placeholder"
          error={submitted ? isEmailValid() : ""}
          type="text"
        />
        <Textfield
          value={Phonenumber}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          label="Phonenumber"
          placeholder="Placeholder"
          error={submitted ? isPhonenumberValid() : ""}
          type="text"
        />
        <Textfield
          value={Password}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          label="Password"
          placeholder="Placeholder"
          error={submitted ? isPasswordValid() : ""}
          type="text"
        />
        <Textfield
          value={Confirmpassword}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          label="Confirmpassword"
          placeholder="Placeholder"
          error={submitted ? isConfirmpasswordValid() : ""}
          type="text"
        />
      </div>
    </div>
  );
};
