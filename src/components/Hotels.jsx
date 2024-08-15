import "./Hotels.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Hotels = ({ hotels }) => {
  return (
    <main className="container">
      <div className="row">
        {hotels
          // eslint-disable-next-line react/prop-types
          .slice(0, 12)
          .map(
            ({ hotel_id, hotel_name, photo1, city, country, numberrooms }) => (
              <div key={hotel_id} className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <img
                    src={photo1}
                    className="card-img-top hotel-img"
                    alt={hotel_name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{hotel_name}</h5>
                    <p className="card-text">
                      {city}, {country}
                    </p>
                    <p className="card-text">Habitaciones: {numberrooms}</p>
                    <Link
                      to={`/hotel/${hotel_id}`}
                      rel="noopener noreferrer"
                      className="btn btn-custom mt-auto"
                      style={{ backgroundColor: "#47978c" }}
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </main>
  );
};

export default Hotels;
