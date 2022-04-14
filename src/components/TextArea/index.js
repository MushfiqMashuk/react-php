import React from "react";
import "./textArea.scss";

function TextArea({ field: { title, required } }) {
  return (
    <div className="textArea_container">
      <label className="label">{title}</label>
      <textarea required={required} rows="5" cols="50"></textarea>
    </div>
  );
}

export default TextArea;
