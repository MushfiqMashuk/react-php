import React from "react";
import "./input.scss";

function Input({ field: { title, required, options } }) {
  return (
    <div className="input_container field_margin">
      <label className="label_margin">{title}</label>
      <input type="text" required={required} />
    </div>
  );
}

export default Input;
