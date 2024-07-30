// eslint-disable-next-line no-unused-vars
import React from "react";
import Hotels from "../components/Hotels";
import { hotels } from "../mocks/hotels.json";

const Reservar = () => {
  return (
    <>
      <Hotels hotels={hotels} />
    </>
  );
};

export default Reservar;
