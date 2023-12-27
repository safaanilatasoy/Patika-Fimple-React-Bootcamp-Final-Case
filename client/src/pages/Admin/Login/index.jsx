import "./adminLogin.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";


import AdminLoginValidation from "../../../components/Validations/AdminLoginValidation";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="leftBox">1</div>
      <div className="rightBox">
        <h2>Admin Panel Giriş</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={AdminLoginValidation}
          onSubmit={(values) => {
            console.log(values);
            navigate("/admin-dashboard");
          }}
        >
          <Form>
            <Field id="username" name="username" placeholder="Kullanıcı adı" />
            <ErrorMessage component="div" className="errors" name="username" />
            <Field id="password" name="password" placeholder="Şifre" />
            <ErrorMessage component="div" className="errors" name="password" />
            <button type="submit">Giriş yap</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login
