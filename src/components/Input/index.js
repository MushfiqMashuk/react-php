import React from "react";
import "./input.scss";

function Input({ field: { title, required, options } }) {
  return (
    <div className="input_container">
      <label className="label">{title}</label>
      <input type="text" required={required} />
    </div>
  );
}

export default Input;
