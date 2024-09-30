import { useState } from "react"; //Hook para manejar el estado
import { Link, useNavigate } from "react-router-dom"; //Hook para manejar la navegación
import axios from "axios"; //Conexión a la BD

import "./Login.css";

const Register = () => {
  const [username, setUsername] = useState(""); //Variable de estado para almacenar el nombre de usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //Variable de estado para almacenar la contraseña
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate(); //Esto permite redirigir a otras rutas

  const handleRegister = () => {
    if (username && email && password && phoneNumber) {
      // Hacer la solicitud al backend para registrar el usuario
      axios
        .post("http://localhost:5000/api/users/register", {
          username: username,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        })
        .then((response) => {
          console.log(response.data);
          // Redirigir al login después del registro exitoso
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error registrando usuario:", error);
          alert("Hubo un problema al registrar el usuario.");
        });
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
          value={email} //Obtener el correo
          onChange={(e) => setEmail(e.target.value)} //actualizar el estado
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
          value={phoneNumber} //obtener el numero
          onChange={(e) => setPhoneNumber(e.target.value)}
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
