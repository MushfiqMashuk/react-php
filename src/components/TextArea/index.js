import React from "react";
import "./textArea.scss";

function TextArea({ field: { title, required } }) {
  return (
    <div className="textArea_container field_margin">
      <label className="label_margin">{title}</label>
      <textarea required={required} rows="5" cols="50"></textarea>
    </div>
  );
}

export default TextArea;
