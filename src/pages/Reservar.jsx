// eslint-disable-next-line no-unused-vars
import React from "react";
import Hotels from "../components/Hotels";
import { hotels } from "../mocks/hotels.json";
import Navbar from "../components/Navbar";

const Reservar = () => {
  return (
    <>
      <Navbar />
      <h2>Hoteles Disponibles</h2>
      <Hotels hotels={hotels} />
    </>
  );
};

export default Reservar;
