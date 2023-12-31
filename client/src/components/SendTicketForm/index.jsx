import style from './style.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import {useNavigate} from "react-router-dom";
import { firestoreDB } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

// validation processes for application form
import SendApplicationValidation from "../../Validations/SendApplicationValidation";


function SendTicketForm() {
  const navigate = useNavigate();

 const handleSubmit = async (values) => {
    try {
      const collectionRef = collection(firestoreDB, 'applications');
      const docRef = await addDoc(collectionRef, values);

      console.log("Document written with ID: ", docRef.id);

      const updatedDocRef = doc(collectionRef, docRef.id);
      await setDoc(updatedDocRef, { id: docRef.id }, { merge: true });

      navigate(`/basvuru-basarili/${docRef.id}`, { state: { applicationId: docRef.id } });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className={style.sendTicketForm}>
      <h2>Başvuru Oluştur</h2>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          tc: "",
          applicationReason: "",
          address: "",
        }}
        validationSchema={SendApplicationValidation}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field id="name" name="name" placeholder="İsim" />
          <ErrorMessage component="div" className={style.errors} name="name" />
          <Field id="surname" name="surname" placeholder="Soyisim" />
          <ErrorMessage
            component="div"
            className={style.errors}
            name="surname"
          />
          <Field id="age" name="age" placeholder="Yaş" type="number" />
          <ErrorMessage component="div" className={style.errors} name="age" />
          <Field id="tc" name="tc" placeholder="TC No" type="number" />
          <ErrorMessage component="div" className={style.errors} name="tc" />
          <Field
            id="applicationReason"
            name="applicationReason"
            placeholder="Başvuru nedeni"
            type="text"
          />
          <ErrorMessage
            component="div"
            className={style.errors}
            name="applicationReason"
          />
          <Field id="address" name="address" placeholder="Adres" type="text" />
          <ErrorMessage
            component="div"
            className={style.errors}
            name="address"
          />
          <button type="submit">Gönder</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SendTicketForm;
