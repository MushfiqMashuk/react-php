import React from "react";

function Radio({ params: { title, required, value } }) {
  return (
    <div>
      <div>
        <label htmlFor="radioButton">{title}</label>
        <input
          type="radio"
          id="radioButton"
          value={value}
          required={required}
        />
      </div>
    </div>
  );
}

export default Radio;
