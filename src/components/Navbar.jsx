import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#40798c" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            className=""
            style={{ width: "50px", height: "50px" }}
          />
          <span>Traveluxe</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reservar">
                Reservar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Iniciar Sesión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perfil">
                Perfil <i className="bi bi-person-circle"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
