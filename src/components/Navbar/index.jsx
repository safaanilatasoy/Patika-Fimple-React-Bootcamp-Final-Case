import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    window.sessionStorage.removeItem("isAuthenticated");
    navigate("admin-login");
  };

  const isLoggedIn = () => {
    const isLogged = window.sessionStorage.getItem("isAuthenticated");
    return isLogged == "true";
  };

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
          {isLoggedIn() ? (
            <li className={style.logout}>
              <button className={style.logoutButton} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
