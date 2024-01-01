
import style from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import AdminAnswerValidation from "../../Validations/AdminAnswerValidation";

import {  setDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { Formik, Form, Field } from "formik";

// eslint-disable-next-line react/prop-types
function ApplicationDetails() {
    const navigate = useNavigate();
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

  const goAppList = () => {
    navigate("/admin-dashboard");
  }

  return (
    <div className={style.applicationList}>
      <div className={style.applicationDetails} id={data.id}>
        <div className={style.applicationDetailsHeader}>
          <div className={style.senderInfos}>
              <button onClick={goAppList} className={style.goBackButton}><i className="uil uil-arrow-left" /><span>Geri</span></button>
            <span className={style.senderName}>
              <b>
                <i className="uil uil-user" />{" "}
              </b>
              {`${data.name} ${data.surname}`}
            </span>
            <span className={style.senderTc}>
              <b>
                {" "}
                <i className="uil uil-postcard" />
              </b>{" "}
              {data.tc}
            </span>
            <span className={style.senderAge}>
              <b>
                <i className="uil uil-user-plus" />{" "}
              </b>{" "}
              {data.age}
            </span>
          </div>

          <div className={style.applicationStatusHeader}>
            <span className={style.applicationStatus}>
              <b>Status: </b>
              {data.isAnswered === true ? (
                <span className="answered">Cevaplandı</span>
              ) : (
                <span className="waitingAnswer">Cevap bekliyor</span>
              )}
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
      {!data.adminAnswer ? (
        <div className={style.answerApplication}>
          <Formik
            initialValues={{
              adminAnswer: "",
              isAnswered: true,
            }}
            validationSchema={AdminAnswerValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                id="adminAnswer"
                name="adminAnswer"
                placeholder="Lütfen cevabınızı yazın..."
              />

              <button type="submit">Gönder</button>
            </Form>
          </Formik>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ApplicationDetails
