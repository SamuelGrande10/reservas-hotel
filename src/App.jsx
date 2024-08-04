import "./App.css";
import "./components/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bedrooms from "./components/Bedrooms";
import InicioSesion from "./pages/InicioSesion";
import RecoverPassword from "./components/RecoverPassword";
import Register from "./components/Register";
import Reservar from "./pages/Reservar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioSesion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/recuperarContrasena" element={<RecoverPassword />} />
        <Route path="/hotel/:id" element={<Bedrooms />} />
      </Routes>
    </Router>
  );
}

export default App;
