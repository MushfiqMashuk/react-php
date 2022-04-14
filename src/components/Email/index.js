import React from "react";

function Email({ field: { title, required } }) {
  return (
    <div className="email_container">
      <label className="label">{title}</label>
      <input type="email" required={required} />
    </div>
  );
}

export default Email;
