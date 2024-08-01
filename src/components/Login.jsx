import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3 className="border-b">Iniciar sesión</h3>
        <p className="border-t mb-1 fw-bold">Usuario:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre de usuario"
          aria-label="Disabled input example"
        />
        <p className="mb-1 fw-bold">Contraseña:</p>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
        />
        <section className="border-b">
          <Link to="/reservar" className="btn btn-link">
            <button type="button" className="btn btn-primary">
              Entrar
            </button>
          </Link>
          <Link
            to="/register"
            className="btn btn-link text-decoration-none text-light"
          >
            <button type="button" className="btn btn-primary">
              Registrarse
            </button>
          </Link>
        </section>
        <p className="mt-3">
          <Link
            to="/recuperarContrasena"
            className="btn btn-link text-decoration-none text-light"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
