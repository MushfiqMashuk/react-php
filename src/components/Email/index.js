import React from "react";

function Email({ field: { title, required } }) {
  return (
    <div className="email_container field_margin">
      <label className="label_margin">{title}</label>
      <input type="email" required={required} />
    </div>
  );
}

export default Email;
