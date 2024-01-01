import { Link } from "react-router-dom";
import style from "./style.module.css";

function Navbar() {

  return (
    <nav className={style.navbar}>
      <div className={style.leftContainer}>
        <div className={style.logo}>
          <Link to="/">
            <i className="uil uil-0-plus"></i>Logo
          </Link>
        </div>
      </div>
      <div className={style.rightContainer}>
        <ul className={style.menu}>
          <li>
            <Link to="/admin-login">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
