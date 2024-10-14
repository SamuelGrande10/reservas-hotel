import { useState } from "react";
import { Link } from "react-router-dom";

import "./Pago.css";
import Captcha from "../assets/images/captcha.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pago = () => {
  const [mesSeleccionado, setMesSeleccionado] = useState("");
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  //Array para mostrar los 12 meses
  const meses = Array.from({ length: 12 }, (v, i) => 1 + i);

  //Obtiendo el año actual según fecha de la compu
  const anioActual = new Date().getFullYear();
  //Array de años desde el año actual hasta 10 años en el futuro
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

  return (
    <>
      <Navbar/>
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
              $<span>47.50</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-3 mt-3">
            <p className="me-4">Tarifa limpieza</p>
            <p>
              $<span>20.70</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom ps-md-3 pe-3 mt-3">
            <p className="me-4">Servicio Traveluxe</p>
            <p>
              $<span>100</span>
            </p>
          </div>
          <section className="d-flex justify-content-between align-items-center ps-md-3 pe-3 mt-3">
            <p className="fw-bold me-4">Total a pagar</p>
            <p className="fw-bold">
              $<span>168.20</span>
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
          />
          <p className="mt-2 mb-1">Número de tarjeta</p>
          <input className="form-control" type="text" placeholder="Tarjeta" />
          <p className="mt-2 mb-1">Cvv</p>
          <input className="form-control" type="text" placeholder="000" />
          <p className="mt-4 mb-1 ps-3">Vencimiento</p>
          <div className="d-flex justify-content-between pe-3 ps-3">
            <section className="me-2">
              <p className="mb-1">Mes:</p>
              <select
                className="form-control"
                id="meses"
                value={mesSeleccionado}
                onChange={handleMesChange}
              >
                <option value="">Selecciona un mes</option>
                {meses.map((mes) => (
                  <option key={mes} value={mes}>
                    {mes}
                  </option>
                ))}

                {/* {mesSeleccionado && <p>Mes seleccionado: {mesSeleccionado}</p>} */}
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

                {/* {anioSeleccionado && (
                  <p>Año seleccionado: {anioSeleccionado}</p>
                )} */}
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
            <Link to="/reservar">
              <button className="btn btn-primary mt-3 me-3">Pagar</button>
            </Link>
            <Link to="/reservar">
              <button className="btn btn-primary mt-3">Cancelar</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Pago;
