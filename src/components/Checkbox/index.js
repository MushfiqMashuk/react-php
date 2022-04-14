const Checkbox = ({ field: { title, required, options } }) => {
  return (
    <div className="field_margin">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        required={required}
      />
      <label htmlFor="exampleCheck1">{title}</label>
    </div>
  );
};

export default Checkbox;
