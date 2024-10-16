import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2"; // Importar SweetAlert
import "./Pago.css";
import Captcha from "../assets/images/captcha.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line
const Pago = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Agregar useNavigate
  const [mesSeleccionado, setMesSeleccionado] = useState("");
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const precio_limpieza = 10.0;
  const precio_traveluxe = 5.0;

  // Obtener el precio de la habitación
  const room_price = location.state?.room_price || 20;
  const id_reserva = location.state?.newReservationId || 1;
  const precio_total = room_price + precio_limpieza + precio_traveluxe;

  // Array para mostrar los 12 meses
  const meses = Array.from({ length: 12 }, (v, i) => 1 + i);
  const anioActual = new Date().getFullYear();
  const anios = Array.from({ length: 11 }, (v, i) => anioActual + i);

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const handleAnioChange = (event) => {
    setAnioSeleccionado(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleAddPayment = () => {
    if (
      id_reserva &&
      room_price &&
      precio_limpieza &&
      precio_traveluxe &&
      precio_total &&
      mesSeleccionado &&
      anioSeleccionado &&
      isChecked
    ) {
      axios
        .post(`http://localhost:5000/api/payment/registerPayment`, {
          id_reserva,
          precio_reserva: room_price,
          precio_limpieza,
          precio_traveluxe,
          precio_total,
        })
        .then((res) => {
          console.log(res.data);
          // Notificar éxito con SweetAlert
          Swal.fire({
            title: "Éxito!",
            text: "Pago realizado exitosamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then(() => {
            navigate("/reservar"); // Redirigir a /reservar
          });
        })
        .catch((error) => {
          console.error("Error al insertar factura:", error);
          Swal.fire({
            title: "Error!",
            text: "Hubo un error al insertar la factura.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        });
    } else {
      // Notificar que hay campos vacíos
      Swal.fire({
        title: "Campos incompletos!",
        text: "Por favor, completa todos los campos del formulario.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="m-auto mb-5 container w-50">
        <h3 className="mb-3 mt-3">Detalles pago de reserva</h3>
        <section className="border-secundario rounded p-3">
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-md-3">
            <p className="fw-bold me-2">Concepto</p>
            <p className="fw-bold">Monto</p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-3 mt-3">
            <p className="me-4">Precio reserva</p>
            <p>
              $<span>{room_price}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-3 mt-3">
            <p className="me-4">Tarifa limpieza</p>
            <p>
              $<span>{precio_limpieza}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-3 mt-3">
            <p className="me-4">Servicio Traveluxe</p>
            <p>
              $<span>{precio_traveluxe}</span>
            </p>
          </div>
          <section className="d-flex justify-content-between align-items-center ps-md-3 pe-3 mt-3">
            <p className="fw-bold me-4">Total a pagar</p>
            <p className="fw-bold">
              $<span>{precio_total}</span>
            </p>
          </section>
        </section>
        <h3 className="mb-3 mt-3">Información de la tarjeta</h3>
        <div className="border-secundario rounded p-3">
          <p className="mt-2 mb-1">Nombre del propietario</p>
          <input
            className="form-control"
            type="text"
            placeholder="Propietario de la tarjeta"
            required
          />
          <p className="mt-2 mb-1">Número de tarjeta</p>
          <input
            className="form-control"
            type="text"
            placeholder="Tarjeta"
            required
          />
          <p className="mt-2 mb-1">Cvv</p>
          <input
            className="form-control"
            type="text"
            placeholder="000"
            required
          />
          <p className="mt-4 mb-1 ps-3">Vencimiento</p>
          <div className="d-flex justify-content-between pe-3 ps-3">
            <section className="me-2">
              <p className="mb-1">Mes:</p>
              <select
                className="form-control"
                id="meses"
                value={mesSeleccionado}
                onChange={handleMesChange}
                required
              >
                <option value="">Selecciona un mes</option>
                {meses.map((mes) => (
                  <option key={mes} value={mes}>
                    {mes}
                  </option>
                ))}
              </select>
            </section>
            <section>
              <p className="mb-1">Año:</p>
              <select
                className="form-control"
                value={anioSeleccionado}
                onChange={handleAnioChange}
                required
              >
                <option value="">Selecciona un año</option>
                {anios.map((anio) => (
                  <option key={anio} value={anio}>
                    {anio}
                  </option>
                ))}
              </select>
            </section>
          </div>
          <section className="m-auto mt-3 col-sm-12 col-12 col-md-8 captcha d-flex justify-content-between align-items-center ps-2 pe-0 border border-2 rounded">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                No soy un robot
              </label>
            </div>
            <img src={Captcha} alt="" className="imgCaptcha" />
          </section>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleAddPayment}
              className="btn btn-primary mt-3 me-3"
            >
              Pagar
            </button>
            <Link to="/reservar">
              <button className="btn btn-primary mt-3">Cancelar</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pago;
