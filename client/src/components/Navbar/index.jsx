import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftContainer">
        <div className="logo">Logo</div>
      </div>
      <div className="rightContainer">
        <ul className="menu">
      
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
