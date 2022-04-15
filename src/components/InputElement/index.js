import Checkbox from "../Checkbox";
import Email from "../Email";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import TextArea from "../TextArea";

function InputElement({ field, fieldName }) {
  //const { title, type, value, required, options, html_attr } = field;
  //const params = { title, value, required, html_attr };
  switch (field.type) {
    case "text":
      return <Input field={field} fieldName={fieldName} />;
    case "checkbox":
      return <Checkbox field={field} fieldName={fieldName} />;
    case "radio":
      return <Radio field={field} fieldName={fieldName} />;
    case "textarea":
      return <TextArea field={field} fieldName={fieldName} />;
    case "select":
      return <Select field={field} fieldName={fieldName} />;
    case "email":
      return <Email field={field} fieldName={fieldName} />;

    default:
      return null;
  }
}

export default InputElement;
