import {Link} from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div>
        <div className="sidebarContainer">
          <ul className="sidebarMenu">
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
