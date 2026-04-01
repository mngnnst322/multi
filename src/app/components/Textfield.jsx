import React from 'react'

export const Textfield = (props) => {
    const {Label, placeholder, value, error, Onchange, type = "text",required = false } =props;
  return (
    <div>
<Label>{Label}*</Label>
<input value={value} placeholder={placeholder} Onchange={Onchange} type={type}/>
   <p>(error)</p> 
   </div>
  );
};

