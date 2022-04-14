import React from "react";

function Select({
  field: { title, required, options, default: defaultValue },
}) {
  return (
    <div className="field_margin">
      <label htmlFor="cars" className="label_margin">
        {title}
      </label>
      <select name="cars" id="cars" required={required}>
        {options &&
          options.length > 0 &&
          options.map((option, i) => (
            <option key={i} value={option.key} defaultValue={defaultValue}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
