import Checkbox from "../Checkbox";
import Email from "../Email";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import TextArea from "../TextArea";

function InputElement({ field }) {
  const { title, type, value } = field;
  switch (type) {
    case "text":
      return <Input />;
    case "checkbox":
      return <Checkbox />;
    case "radio":
      return <Radio />;
    case "textarea":
      return <TextArea />;
    case "select":
      return <Select />;
    case "email":
      return <Email />;

    default:
      return null;
  }
}

export default InputElement;
