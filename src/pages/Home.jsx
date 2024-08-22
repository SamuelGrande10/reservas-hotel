import Navbar from '../components/Navbar';
import '../components/Home.css';
import { hotels } from "../data/hotels.json";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-5">
        <h3 className="fst-italic">
          Bienvenido a <span>Traveluxe</span> 
          <i className="fa-solid fa-umbrella-beach ms-4"></i> 
        </h3>
        <h4 className="text-center mt-5">¡Conoce destinos que te sorprenderán!</h4>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* agregar un link para enviar al contacto */}
        {/* <p>Aqui va el contacto</p>
        <p>Aqui va el footer</p> */}
      </section>
    </>
  );
};

export default Home;
