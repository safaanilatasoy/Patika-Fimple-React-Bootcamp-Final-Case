import {Link} from "react-router-dom";
import style from "./style.module.css";
function Sidebar() {
  return (
    <div>
        <div className={style.sidebarContainer}>
          <ul className={style.sidebarMenu}>
            <li>
              <Link to="/">Başvuru Oluştur</Link>
            </li>

            <li>
              <Link to="/basvuru-sorgula">Başvuru Sorgula</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Sidebar
