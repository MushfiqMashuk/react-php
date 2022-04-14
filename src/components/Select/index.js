import React from "react";

function Select({ field: { title, required, options } }) {
  return (
    <div>
      <p>{title}</p>
      <select name="cars" id="cars" required={required}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default Select;
