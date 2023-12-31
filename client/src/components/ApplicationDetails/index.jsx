
import style from "./style.module.css";
import { useParams } from "react-router-dom";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

import { Formik, Form, Field } from "formik";

// eslint-disable-next-line react/prop-types
function ApplicationDetails() {
    const { id } = useParams();
    const docRef = doc(firestoreDB, "applications", id);
    const [data, isLoading] = useDocumentData(docRef);

    if (isLoading) {
      return <h3>Yükleniyor...</h3>;
    }

    if (!data) {
      return (
        <h4>
          Böyle bir başvuru bulunamadı, lütfen başvuru numaranızı kontrol
          ediniz.
        </h4>
      );
    }

const handleSubmit = async (values) => {
    try {
      
      const updatedDocRef = doc(firestoreDB, "applications", id);

      await setDoc(updatedDocRef, values, { merge: true });

      console.log("Belge başarıyla güncellendi!");
    } catch (error) {
      console.error("Belge güncelleme hatası: ", error);
    }
  };


  return (
    <div className={style.applicationList}>
      <div className={style.applicationDetails} id={data.id}>
        <div className={style.applicationDetailsHeader}>
          <div className={style.senderInfos}>
            <span className={style.senderName}>
              <b>İsim/Soyisim: </b>
              {`${data.name} ${data.surname}`}
            </span>
            <span className={style.senderTc}>
              <b>TC:</b> {data.tc}
            </span>
            <span className={style.senderAge}>
              <b>Yaş: </b> {data.age}
            </span>
          </div>

          <div className={style.applicationStatusHeader}>
            <span className={style.applicationStatus}>
              <b>Status: </b>
              {data.isAnswered === true ? "Cevaplandı" : "Cevap Bekliyor"}
            </span>
          </div>
        </div>

        <div className={style.applicationContentHeader}>
          <div className={style.applicationContent}>
            {data.applicationReason}
          </div>
        </div>

        {data.isAnswered === true ? (
          <div className={style.adminAnswer}>
            <b>Başvuru cevabı:</b> {data.adminAnswer}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={style.answerApplication}>
        <Formik
          initialValues={{
            adminAnswer: "",
            isAnswered: true,
  
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field id="adminAnswer" name="adminAnswer" placeholder="Cevabınız" />
            <button type="submit">Gönder</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ApplicationDetails
