import React from "react";

function Email({ params: { title, required, value } }) {
  return (
    <div className="email_container">
      <label className="label">{title}</label>
      <input type="email" required={required} />
    </div>
  );
}

export default Email;
