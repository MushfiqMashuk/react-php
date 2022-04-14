import Checkbox from "../Checkbox";
import Email from "../Email";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import TextArea from "../TextArea";

function InputElement({ field }) {
  //const { title, type, value, required, options, html_attr } = field;
  //const params = { title, value, required, html_attr };
  switch (field.type) {
    case "text":
      return <Input field={field} />;
    case "checkbox":
      return <Checkbox field={field} />;
    case "radio":
      return <Radio field={field} />;
    case "textarea":
      return <TextArea field={field} />;
    case "select":
      return <Select field={field} />;
    case "email":
      return <Email field={field} />;

    default:
      return null;
  }
}

export default InputElement;
