import style from './style.module.css';

function ApplicationSuccess() {
  return (
    <div className={style.applicationSuccessContainer}>
      <h3>Başvuru Başarılı</h3>
      <div className={style.info}>
        <span>
          <strong>Başvuru kodunuz:</strong>
          <i> a3424sdf3rr24 </i>
        </span>
        <span className={style.info}>Başvuru kodunuzu kullanarak başvurunuzun durumunu sorgulayabilirsiniz.</span>
      </div>
    </div>
  );
}

export default ApplicationSuccess
