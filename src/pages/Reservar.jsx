// eslint-disable-next-line no-unused-vars
import React from "react";
import Hotels from "../components/Hotels";
import Wha from "../components/Wha";
import { hotels } from "../mocks/hotels.json";

const Reservar = () => {
  return (
    <>
      <h2>Hoteles Disponibles</h2>
      <Hotels hotels={hotels} />
      <Wha />
    </>
  );
};

export default Reservar;
