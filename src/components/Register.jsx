import { useState } from "react"; //Hook para manejar el estado
import { Link, useNavigate } from "react-router-dom"; //Hook para manejar la navegación

import "./Login.css";

const Register = () => {
  const [username, setUsername] = useState(""); //Variable de estado para almacenar el nombre de usuario
  const [password, setPassword] = useState(""); //Variable de estado para almacenar la contraseña
  const navigate = useNavigate(); //Esto permite redirigir a otras rutas

  const handleRegister = () => {
    if (username && password) {
      // Guardar en localStorage
      localStorage.setItem("registeredUser", username); //Almacenar el usuario en el localStorage
      localStorage.setItem("registeredPassword", password); //Almacenar la contraseña en el localStorage

      // Redirigir al login
      navigate("/login");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };
  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3 className="border-b">Crear nueva cuenta</h3>
        <p className="border-t mb-1 fw-bold">Nombre:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre de usuario"
          value={username} //obtener el usuario
          onChange={(e) => setUsername(e.target.value)} //actualizar el estado
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
          value={password} //obtener la contraseña
          onChange={(e) => setPassword(e.target.value)} //actualizar el estado
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
          <Link to="/login" className="btn btn-link">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegister}
            >
              Registrarse
            </button>
          </Link>
          <Link
            to="/login"
            className="btn btn-link text-decoration-none text-light"
          >
            <button type="button" className="btn btn-primary">
              Regresar
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Register;
