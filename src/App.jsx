import "./App.css";
import "./components/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bedrooms from "./components/Bedrooms";
import InicioSesion from "./pages/InicioSesion";
import RecoverPassword from "./components/RecoverPassword";
import Register from "./components/Register";
import Reservar from "./pages/Reservar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Perfil from "./components/Perfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<InicioSesion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperarContrasena" element={<RecoverPassword />} />
        <Route exact path="/reservar" element={<Reservar />} />
        <Route path="/hotel/:id" element={<Bedrooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
