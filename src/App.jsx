import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Login.css";
import InicioSesion from "./pages/InicioSesion";
import Register from "./components/Register";
import Reservar from "./pages/Reservar";
import RecoverPassword from "./components/RecoverPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioSesion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/recuperarContrasena" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
