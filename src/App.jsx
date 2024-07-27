import "./App.css";
import Navbar from "./components/Navbar";
import Reservar from "./pages/Reservar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Reservar />
      </div>
    </>
  );
}

export default App;
