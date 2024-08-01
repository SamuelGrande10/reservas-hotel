import { Link } from "react-router-dom";

import "./Login.css";

const Register = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3 className="border-b">Crear nueva cuenta</h3>
        <p className="border-t mb-1 fw-bold">Nombre:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre de usuario"
          aria-label="Disabled input example"
        />
        <p className="mb-1 fw-bold">Correo:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Correo electrónico"
          aria-label="Disabled input example"
        />
        <p className="mb-1 fw-bold">Contraseña:</p>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
        />
        <p className="mb-1 fw-bold">Confirmar contraseña:</p>
        <input
          type="password"
          className="form-control"
          placeholder="Confirmar contraseña"
        />
        <p className="mb-1 fw-bold">Teléfono:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Número de teléfono"
          aria-label="Disabled input example"
        />
        <section className="border-b">
          {/*Se agrego al Link la ruta de reservas solo para mostrar lo que hay en esa page */}
          <Link to="/" className="btn btn-link">
            <button type="button" className="btn btn-primary">
              Registrarse
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Register;
