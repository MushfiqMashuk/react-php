import React from "react";

function TextArea({ params: { title, required, value } }) {
  return (
    <div className="textArea_container">
      <label className="label">{title}</label>
      <textarea required={required} value={value} rows="5" cols="50"></textarea>
    </div>
  );
}

export default TextArea;
