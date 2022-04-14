import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import InputElement from "../../components/InputElement";

function FormPage() {
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    const getForm = async () => {
      try {
        const response = await axios.get("http://localhost/api/get_form.php");
        const formData = response?.data;
        console.log(formData.data);
        console.log(Object.entries(formData.data.fields[0]));
        setFormFields(Object.entries(formData.data.fields[0]));
      } catch (err) {
        console.log(err);
      }
    };

    getForm();
  }, []);

  return (
    <div>
      <Form>
        {formFields.map((field, index) => (
          <InputElement key={index} field={field[1]} />
        ))}
      </Form>
    </div>
  );
}

export default FormPage;
