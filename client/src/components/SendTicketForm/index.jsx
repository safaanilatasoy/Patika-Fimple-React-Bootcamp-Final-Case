import { Formik, Form, Field } from "formik";
import './sendTicketForm.css';
import {useNavigate} from "react-router-dom";

function SendTicketForm() {
  const navigate = useNavigate();
  return (
    <div className="sendTicketForm">
      <h2>Başvuru Oluştur</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          tc: "",
          applicationReason: "",
          address: "",
        }}
        onSubmit={ (values) => {
         
          console.log(values);
          navigate("/basvuru-basarili");
        }}
      >
        <Form>
          <Field id="firstName" name="firstName" placeholder="Ad" />

          <Field id="lastName" name="lastName" placeholder="Soyad" />
          <Field
            id="age"
            name="age"
            placeholder="Yaş"
            type="number"
          />
          <Field id="tc" name="tc" placeholder="TC No" type="number" />
          <Field
            id="applicationReason"
            name="applicationReason"
            placeholder="Başvuru nedeni"
            type="text"
          />
          <Field id="address" name="address" placeholder="Adres" type="text" />
          <button type="submit">Gönder</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SendTicketForm;
