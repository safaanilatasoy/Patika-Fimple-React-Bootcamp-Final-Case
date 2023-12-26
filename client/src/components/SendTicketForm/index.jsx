import { Formik, Form, Field } from "formik";
import './sendTicketForm.css';
import {useNavigate} from "react-router-dom";
import SendApplicationValidation from "../Validations/SendApplicationValidation";

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
        validationSchema={SendApplicationValidation}
        onSubmit={(values) => {
          console.log(values);
          navigate("/basvuru-basarili");
        }}
      >
       {({ errors, touched }) => (
        <Form>
          <Field id="firstName" name="firstName" placeholder="Ad" />
              {errors.firstName && touched.firstName ? (<div className="errors">{errors.firstName}</div>): null}
          <Field id="lastName" name="lastName" placeholder="Soyad" />
              {errors.lastName && touched.lastName ? (<div className="errors">{errors.lastName}</div>): null}
          <Field id="age" name="age" placeholder="Yaş" type="number" />
              {errors.age && touched.age ? (<div className="errors">{errors.age}</div>): null}
          <Field id="tc" name="tc" placeholder="TC No" type="number" />
              {errors.tc && touched.tc ? (<div className="errors">{errors.tc}</div>): null}
          <Field id="applicationReason" name="applicationReason" placeholder="Başvuru nedeni" type="text"/>
              {errors.applicationReason && touched.applicationReason ? (<div className="errors">{errors.applicationReason}</div>): null}
          <Field id="address" name="address" placeholder="Adres" type="text" />
              {errors.address && touched.address ? (<div className="errors">{errors.address}</div>): null}
          <button type="submit">Gönder</button>
        </Form>
       )}
      </Formik>
    </div>
  );
}

export default SendTicketForm;
