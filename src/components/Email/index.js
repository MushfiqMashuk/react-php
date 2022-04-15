import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function Email({ field: { title, required }, fieldName }) {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="email_container field_margin">
      <label className="label_margin">{title}</label>
      <input
        type="email"
        required={required}
        onChange={(e) => handleChange(fieldName, e)}
      />
    </div>
  );
}

export default Email;
