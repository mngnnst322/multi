import React from "react";

export const Textfield = (props) => {
  const {
    label,
    placeholder,
    value,
    error,
    onChange,
    type = "text",
    required = false,
  } = props;
  return (
    <div className="space-y-4">
      <label className="font-semibold text-sm">
        {label}
        {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full h-11 rounded-lg border border-[#CBD5E1] p-3 ${error ? "border-[#14924]" : "border-[#CBD5E1]"}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
