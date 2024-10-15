import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ConfirmacionReserva = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, room, cantHuespedes, fechaLlegada, fechaSalida } = location.state;

  const handleProceedToPayment = () => {
    // Redirigir a la página de pago o iniciar el proceso de pago
    navigate('/pago');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <h2 className='text-center'>Confirmación de Reserva</h2>
        <div className="card p-4 mt-4 text-center w-75 m-auto">
          <h4>{hotel.hotel_name}</h4>
          <p><strong>Habitación:</strong> {room.room_type}</p>
          <p><strong>Capacidad:</strong> {room.room_capacity} personas</p>
          <p><strong>Servicios:</strong> {room.room_amenities.join(", ")}</p>
          <p><strong>Fecha de Llegada:</strong> {fechaLlegada}</p>
          <p><strong>Fecha de Salida:</strong> {fechaSalida}</p>
          <p><strong>Número de Huéspedes:</strong> {cantHuespedes}</p>
        </div>
        <div className="d-flex justify-content-center">
            <button
                className="btn btn-custom-room mt-3 font-weight-bold w-25"
                onClick={handleProceedToPayment}
            >
                Proceder al Pago
            </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmacionReserva;
