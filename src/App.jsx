import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Reservar from "./pages/Reservar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Reservar />} />
          <Route path="/reservar" element={<Reservar />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
