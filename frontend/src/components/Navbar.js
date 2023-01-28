//import { Link } from 'react-router-dom';
import './Navbar.css';
//import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container_A">
        <div className="login">
          <a href="LoginFenster">LOGIN/INSKRIPTION</a>
        </div>

        <div className="marke">
          <div>
            <img src="./images/Logo.png" alt="Logo" />
          </div>
          <a href="/">MeineMarke</a>
        </div>
        <div className="korb">
          <a href="/Korb" className="Korb_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              WARENKORB
              <span className="Korblogo_badge">(0)</span>
            </span>
          </a>
        </div>
      </div>
      <div className="container_B">
        <a href="HemdenFenster">Hemden</a>
        <a href="PolosFenster">Polos & T-Shirts</a>
        <a href="StrickFenster">Strick & Sweat</a>
        <a href="AccessoiresFenster">Accessoires</a>
        <a href="OutletFenster">Outlet</a>
      </div>
    </nav>
  );
};
export default Navbar;
