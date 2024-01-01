import style from "./style.module.css";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

// eslint-disable-next-line react/prop-types
function ApplicationList({applicationId}) {
  const docRef = doc(firestoreDB, "applications", applicationId);
  const [data, isLoading] = useDocumentData(docRef);


  if (isLoading) {
    return <h3 className={style.loading}>Yükleniyor...</h3>
  }

  if (!data) {
    return <h4 className={style.notFoundText}>Böyle bir başvuru bulunamadı, lütfen başvuru numaranızı kontrol ediniz.</h4>
  }

  console.log(data);

  return (
    <div className={style.applicationList}>
      <div className={style.applicationDetails} id={data.id}>
        <div className={style.applicationDetailsHeader}>
          <div className={style.senderInfos}>
            <span className={style.senderName}>
              <b>
                <i className="uil uil-user" />{" "}
              </b>
              {`${data.name} ${data.surname}`}
            </span>
            <span className={style.senderTc}>
              <b>
                <i className="uil uil-postcard" />
              </b>{" "}
              {data.tc}
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
    </div>
  );
}

export default ApplicationList;
