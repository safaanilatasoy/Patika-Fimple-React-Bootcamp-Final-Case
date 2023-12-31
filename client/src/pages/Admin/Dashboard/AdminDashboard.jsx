import Applications from "../../../components/Applications";
import style from "./style.module.css";



function AdminDashboard() {

  return (
    <div className={style.mainContainer}>
      <div className={style.dashboard}>
        <Applications />
      </div>
    </div>
  );
}

export default AdminDashboard
