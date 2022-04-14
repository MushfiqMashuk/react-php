const Checkbox = ({ params: { title, required, value } }) => {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={value}
        required={required}
      />
      <label htmlFor="exampleCheck1">{title}</label>
    </div>
  );
};

export default Checkbox;
