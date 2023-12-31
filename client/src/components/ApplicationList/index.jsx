import style from "./style.module.css";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

// eslint-disable-next-line react/prop-types
function ApplicationDetails({applicationId}) {
  const docRef = doc(firestoreDB, "applications", applicationId);
  const [data, isLoading] = useDocumentData(docRef);

  if (isLoading) {
    return <h3>Yükleniyor...</h3>
  }

  if (!data) {
    return <h4>Böyle bir başvuru bulunamadı, lütfen başvuru numaranızı kontrol ediniz.</h4>
  }

  console.log(data);

  return (
    <div className={style.applicationList}>
      <div className={style.applicationDetails} id={data.id}>
        <div className={style.applicationDetailsHeader}>
          <div className={style.senderInfos}>
            <span className={style.senderName}>{`${data.name} ${data.surname}`}</span>
            <span className={style.senderTc}>{data.tc}</span>
            <span className={style.senderAge}>Yaş: {data.age}</span>
          </div>

          <div className={style.applicationStatusHeader}>
            <span className={style.applicationStatus}>
              Status: {data.isAnswered === true ? "Cevaplandı" : "Cevap Bekliyor"}
            </span>
          </div>
        </div>

        <div className={style.applicationContentHeader}>
          <div className={style.applicationContent}>{data.applicationReason}</div>
        </div>

        {data.isAnswered === true ? (
          <div className={style.adminAnswer}>
            Başvuru cevabı: {data.adminAnswer}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ApplicationDetails;