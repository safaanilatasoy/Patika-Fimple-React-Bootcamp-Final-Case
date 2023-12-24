import {Link} from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContainer}>
        <div className={styles.logo}>Logo</div>
      </div>
      <div className={styles.rightContainer}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/basvuru-olustur">Başvuru Oluştur</Link>
          </li>
          <li>
            <Link to="/basvuru-sorgula">Başvuru Sorgula</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
