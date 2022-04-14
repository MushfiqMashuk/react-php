import React from "react";

function Radio({ field: { title, required, options } }) {
  return (
    <div className="field_margin">
      <p>{title}</p>
      {options &&
        options.length > 0 &&
        options.map((option, i) => (
          <div key={i}>
            <input
              type="radio"
              id={`option${i}`}
              value={option.key}
              required={required}
              name={title.toLowerCase()}
            />
            <label htmlFor={`option${i}`}>{option.label}</label>
          </div>
        ))}
    </div>
  );
}

export default Radio;
