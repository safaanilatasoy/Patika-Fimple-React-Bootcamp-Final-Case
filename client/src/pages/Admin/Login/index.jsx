import "./adminLogin.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../firebase';


// Form validation processes for admin panel 
import AdminLoginValidation from "../../../Validations/AdminLoginValidation";

function Login() {
  const navigate = useNavigate();

  return (
    // Main Container
    <div className="container">
      {/* Image container */}
      <div className="leftBox"></div>

      {/* Login form */}
      <div className="rightBox">
        <h2>Admin Panel Giriş</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={AdminLoginValidation}
          onSubmit={(values) => {
            if (!values.email || !values.password) {
              return;
            }

            signInWithEmailAndPassword(auth, values.email, values.password)
              .then(() => {
                window.sessionStorage.setItem("isAuthenticated", true);
                navigate("/admin-dashboard");
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          <Form>
            <Field type="email" id="email" name="email" placeholder="Eposta" />
            <ErrorMessage component="div" className="errors" name="email" />
            <Field type="password" id="password" name="password" placeholder="Şifre"/>
            <ErrorMessage component="div" className="errors" name="password" />
            <button type="submit">Giriş yap</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login
