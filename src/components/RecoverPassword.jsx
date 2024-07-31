import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3>Recuperar Contraseña</h3>
        <p>Por favor introduce tu cuenta de correo electrónico</p>
        <p className="border-t mb-1 fw-bold">Correo:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Correo electrónico"
          aria-label="Disabled input example"
        />
        <Link to="/" className="btn btn-link">
          <button type="button" className="btn btn-primary mt-3">
            Regresar
          </button>
        </Link>
        <button type="button" className="btn btn-primary mt-3">
          Recuperar
        </button>
      </section>
    </div>
  );
};

export default RecoverPassword;
