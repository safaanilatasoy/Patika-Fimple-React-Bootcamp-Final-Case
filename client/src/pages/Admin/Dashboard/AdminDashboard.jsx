import style from "./style.module.css";

import Applications from "../../../components/Applications";


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
