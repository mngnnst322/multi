import React from "react";
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
}) => {
  return (
    <div>
      <div className=" w-97.5   justify-center items-center gap-4">
        <Header />
        <Textfield
          type="date"
          value={form.birthday}
          onChange={(e) => {
            setForm({ ...form, birthday: e.target.value });
          }}
          required={true}
          label="Birthday"
          placeholder="2024/01/01..."
        />
        <ImageField
          value={form.image}
          onChange={(e) => {
            const imageValue = URL.createObjectURL(e.target.files[0]);
            setForm({ ...form, image: imageValue });
          }}
          onCancel={() => {
            setForm({ ...form, image: "" });
          }}
          required={true}
          label="Profile Image"
        />
      </div>

      <div className="flex gap-4 my-10">
        <Back onClick={prevStep} />
        <Button stepCount={currentStep} nextStep={nextStep} />
      </div>
    </div>
  );
};
