import style from "./style.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

// eslint-disable-next-line react/prop-types
function SearchApplicationForm({ onFormSubmit }) {
  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          applicationID: "",
        }}
        onSubmit={(values, { resetForm }) => {
          onFormSubmit(values.applicationID);
          resetForm(); 
        }}
      >
        <Form className={style.applicationSearchForm}>
          <Field id="applicationID" name="applicationID" placeholder="Lütfen başvuru kodunu giriniz" />
          <ErrorMessage component="div" className={style.errors} name="applicationID"/>

          <button type="submit"><i className="uil uil-search" />Ara</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchApplicationForm
