const Checkbox = ({ field: { title, required, options } }) => {
  return (
    <div className="mb-3 form-check">
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
