import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [username, setUsername] = useState(""); //Variable de estado para almacenar el nombre de usuario
  const [password, setPassword] = useState(""); //Variable de estado para almacenar la contraseña
  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredUser = localStorage.getItem("registeredUser"); //obtiene el usuario del localStorage
    const registeredPassword = localStorage.getItem("registeredPassword"); //obtiene la contra del localStorage

    if (username === registeredUser && password === registeredPassword) {
      // Redirigir a la página principal (/home)
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3 className="border-b">Iniciar sesión</h3>
        <p className="border-t mb-1 fw-bold">Usuario:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="mb-1 fw-bold">Contraseña:</p>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <section className="border-b">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Entrar
          </button>
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
