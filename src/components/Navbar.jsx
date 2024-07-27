import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-menu">
        <div className="nav-item">Reservar</div>
        <div className="nav-item">Reseñas</div>
        <div className="nav-item">Contacto</div>
      </div>
    </nav>
  );
};

export default Navbar;
