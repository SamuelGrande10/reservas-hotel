import Navbar from "./Navbar";
import "./Perfil.css";
import FotoPerfil from "../assets/images/deadpool.jpg";
import Footer from "./Footer";
import { hotels } from "../data/hotels.json";

const Perfil = () => {
  const hotel = hotels[1];
  const hotelOne = hotels[2];
  const hotelTwo = hotels[3];
  return (
    <>
      <Navbar />
      <div>
        <section className="FondoPerfil"></section>
        <div className="infoPerfil d-md-flex justify-content-around align-items-center p-3">
          <div className="col-12 col-md-6">
            <img
              className="fotoPerfil rounded-circle"
              src={FotoPerfil}
              alt="Foto del perfil"
            />
            <div>
              <p className="fw-bold fs-3">Juan Perez</p>
              <p>
                Soy una persona amable, muy paciente y me encantan los niños
                porque convivo con una familia grande que siempre está rodeada
                de risas y juegos.
              </p>
              <section>
                <p>
                  Vive en <span className="fw-bold">Madrid, Madrid España</span>
                </p>
                <ul>
                  <li>
                    Más de <span className="fw-bold">400</span> contactos
                  </li>
                </ul>
              </section>
              <p>
                <a href="" className="text-decoration-none"></a>... Ver
                información de Juan
              </p>
            </div>
            <div className="text-center">
              <button className="btn btn-primary me-2">Siguiendo</button>
              <button className="btn btn-secondary">Más...</button>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-center">Reservas recientes</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotel.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotel.hotel_name}</p>
              </div>
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotelOne.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotelOne.hotel_name}</p>
              </div>
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotelTwo.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotelTwo.hotel_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
