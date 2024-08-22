// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Hotels from "../components/Hotels";
import { hotels } from "../data/hotels.json";
import { continents } from "../data/continents.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Reservar = () => {
  const [filters, setFilters] = useState({
    hotelName: "",
    continent: "",
    country: "",
    numberrooms: "",
  });
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    if (name === "continent") {
      const selectedContinent = continents.find(
        (continent) => continent.continent_name === value
      );
      setCountries(selectedContinent ? selectedContinent.countries : []);
      setFilters((prevFilters) => ({
        ...prevFilters,
        country: "",
      }));
    }
  };

  const handleClearFilters = () => {
    setFilters({
      hotelName: "",
      continent: "",
      country: "",
      numberrooms: "",
    });
    setCountries([]);
  };

  useEffect(() => {
    const filtered = hotels.filter((hotel) => {
      const { continent_name, countryisocode, numberrooms, hotel_name } = hotel;
      return (
        (filters.hotelName === "" ||
          hotel_name.toLowerCase().includes(filters.hotelName.toLowerCase())) &&
        (filters.continent === "" ||
          continent_name.includes(filters.continent)) &&
        (filters.country === "" || countryisocode.includes(filters.country)) &&
        (filters.numberrooms === "" ||
          numberrooms >= parseInt(filters.numberrooms, 10))
      );
    });
    setFilteredHotels(filtered);
  }, [filters]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="py-3">Hoteles Disponibles</h2>
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3">
            <input
              type="text"
              name="hotelName"
              value={filters.hotelName}
              onChange={handleChange}
              className="form-control"
              placeholder="Nombre del Hotel"
            />
          </div>
          <div className="col-12 col-md-2 mb-3">
            <select
              name="continent"
              value={filters.continent}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Región</option>
              {continents.map((continent, index) => (
                <option key={index} value={continent.continent_name}>
                  {continent.continent_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <select
              name="country"
              value={filters.country}
              onChange={handleChange}
              className="form-control"
              disabled={countries.length === 0}
            >
              <option value="">País</option>
              {countries.map((country, index) => (
                <option key={index} value={country.country_isocode}>
                  {country.country_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <input
              type="number"
              name="numberrooms"
              value={filters.numberrooms}
              onChange={handleChange}
              className="form-control"
              placeholder="Número de Habitaciones"
            />
          </div>
          <div className="col-12 col-md-2 mb-3">
            <button className="btn btn-secondary" onClick={handleClearFilters}>
              Limpiar Filtros
            </button>
          </div>
        </div>
        <Hotels hotels={filteredHotels} />
      </div>
      <Footer />
    </>
  );
};

export default Reservar;
