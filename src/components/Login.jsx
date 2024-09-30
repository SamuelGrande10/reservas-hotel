import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      axios
        .post("http://localhost:5000/api/users/login", {
          email,
          password,
        })
        .then((response) => {
          const userData = response.data; // Aquí estará el id del usuario
          localStorage.setItem("userId", userData.id); // Guardar el id en localStorage
          // Redirigir a la página principal ("/")
          navigate("/perfil");
        })
        .catch((error) => {
          console.error("Error al iniciar sesión:", error);
          alert("Usuario o contraseña incorrectos");
        });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center w-100">
      <section className="bg-opacity rounded w-50 text-light text-center p-3">
        <h3 className="border-b">Iniciar sesión</h3>
        <p className="border-t mb-1 fw-bold">Correo:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="mb-1 fw-bold">Contraseña:</p>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <section className="border-b mt-2">
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
        <Link to="/" className="btn btn-link text-decoration-none text-light">
          <button type="button" className="btn btn-primary">
            Regresar
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
