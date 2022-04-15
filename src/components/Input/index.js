import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./input.scss";

function Input({ field: { title, required }, fieldName }) {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="input_container field_margin">
      <label className="label_margin">{title}</label>
      <input
        type="text"
        required={required}
        onChange={(e) => handleChange(fieldName, e)}
      />
    </div>
  );
}

export default Input;
