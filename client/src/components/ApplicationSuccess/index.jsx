import style from './style.module.css';
import { useLocation } from "react-router-dom";

function ApplicationSuccess() {

  const location = useLocation();
  const applicationId = location.state ? location.state.applicationId : "Böyle bir başvuru bulunamadı";

  return (
    <div className={style.applicationSuccessContainer}>
      <h3>{location.state ? "Başvuru Başarılı" : <div className={style.errors}>Böyle bir başvuru yok</div>}</h3>

      <div className={style.info}>
        <span>
          <strong>Başvuru kodunuz:</strong>
          <i> {applicationId} </i>
        </span>
        <span className={style.info}>{location.state ? "Başvuru kodunuzu kullanarak başvurunuzun durumunu sorgulayabilirsiniz." : "Böyle bir başvuru yok lütfen başvuru numaranızı kontrol ediniz"}</span>
      </div>
    </div>
  );
}

export default ApplicationSuccess
