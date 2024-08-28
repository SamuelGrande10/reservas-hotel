import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { hotels } from "../data/hotels.json";
import "./Room.css";
import Pago from "./Pago";

const Room = () => {
  const { id, id_room } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find((hotel) => hotel.hotel_id === parseInt(id));
  const room = hotel.rooms.find((room) => room.room_id === parseInt(id_room));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = (calificacion) => {
    const estrellas = [];
    for (let i = 0; i < 5; i++) {
      estrellas.push(
        <span
          key={i}
          className={i < calificacion ? "text-warning" : "text-muted"}
          style={{ fontSize: "1.5rem" }}
        >
          ★
        </span>
      );
    }
    return estrellas;
  };

  const handleViewRooms = () => {
    navigate(`/hotel/${id}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h2>{room.room_type}</h2>
            <img
              src={room.room_photo1}
              alt={room.room_type}
              className="img-fluid room-image my-3"
            />
            <p className="mt-3">
              <strong>Capacidad:</strong> {room.room_capacity} personas
            </p>
            <p className="mt-3">
              <strong>Servicios:</strong> {room.room_amenities.join(", ")}
            </p>
            <p className="mt-3">
              <strong>Descripción del Hotel:</strong> {hotel.overview}
            </p>
          </div>
          <div className="col-lg-4">
            <h4>{hotel.hotel_name}</h4>
            <div className="d-flex justify-content-start pb-2">
              {renderStars(hotel.star_rating)}
            </div>
            <p>
              {hotel.city}, {hotel.country}
            </p>

            <h4 className="mt-4">Reservar esta Habitación</h4>
            <form>
              <div className="form-group mt-3">
                <label>Fecha de Llegada</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group mt-3">
                <label>Fecha de Salida</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group mt-3">
                <label>Número de Huéspedes</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max={room.room_capacity}
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-custom-room btn-block mt-3 font-weight-bold"
                onClick={handleOpenModal}
              >
                Reservar
              </button>
            </form>

            <button
              className="btn btn-secondary btn-block mt-3"
              onClick={handleViewRooms}
            >
              Ver Otras Habitaciones
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Pago */}
      {isModalOpen && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles de Pago</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <Pago />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Room;
