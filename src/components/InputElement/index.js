import Checkbox from "../Checkbox";
import Email from "../Email";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import TextArea from "../TextArea";

function InputElement({ field }) {
  const { title, type, value, required, options, html_attr } = field;
  const params = { title, value, required, html_attr };
  switch (type) {
    case "text":
      return <Input params={params} />;
    case "checkbox":
      return <Checkbox params={params} />;
    case "radio":
      return <Radio params={params} options={options}/>;
    case "textarea":
      return <TextArea params={params} />;
    case "select":
      return <Select params={params} />;
    case "email":
      return <Email params={params} />;

    default:
      return null;
  }
}

export default InputElement;
