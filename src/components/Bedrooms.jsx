import "./Bedrooms.css";
import { hotels } from "../data/hotels.json";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Bedrooms = () => {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.hotel_id === parseInt(id));
  const [show, setShow] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  if (!hotel) {
    return <div>Hotel no encontrado</div>;
  }

  const handleShow = (photo) => {
    setSelectedPhoto(photo);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const amenityIcons = {
    WiFi: "fas fa-wifi",
    TV: "fas fa-tv",
    "Air Conditioning": "fas fa-snowflake",
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-style">{hotel.hotel_name}</h1>
        <div className="row mt-5">
          <h4 className="text-style">Habitaciones</h4>
          {hotel.rooms.map(
            ({
              room_id,
              room_type,
              room_capacity,
              room_amenities,
              room_photo1,
            }) => (
              <div key={room_id} className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 card-style">
                  <div className="card-body">
                    <img
                      src={room_photo1 || 'https://img.freepik.com/foto-gratis/pequeno-interior-habitacion-hotel-cama-doble-bano_1262-12489.jpg?'}
                      className="img-fluid border border-secondary room-image-list"
                      onClick={() => handleShow(room_photo1)}
                      alt={`Foto de la ${room_type}`}
                    />
                    <h5 className="card-title mt-3">
                      {" "}
                      <span className="badge badge-bg">{room_type}</span>{" "}
                    </h5>
                    <p className="card-text fw-bold">
                      Capacidad: {room_capacity}
                    </p>
                    <p className="card-text fw-bold">Comodidades:</p>
                    <ul className="p-0">
                      {room_amenities.map((amenity, index) => (
                        <li key={index} className="amenity-item">
                          <i
                            className={amenityIcons[amenity] + " amenity-icon"}
                          ></i>
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/hotel/${id}/room/${room_id}`}
                      className="btn btn-custom-bedrooms mt-3"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {show && (
        <div
          className="modal modal-lg fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Vista de Habitación</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedPhoto || 'https://img.freepik.com/foto-gratis/pequeno-interior-habitacion-hotel-cama-doble-bano_1262-12489.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid'}
                  alt="room expanded"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bedrooms;
