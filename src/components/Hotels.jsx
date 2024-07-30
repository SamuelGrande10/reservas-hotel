import "./Hotels.css";

// eslint-disable-next-line react/prop-types
const Hotels = ({ hotels }) => {
  return (
    <main className="container">
      <div className="row">
        {hotels
          // eslint-disable-next-line react/prop-types
          .slice(0, 12)
          .map(
            ({
              hotel_id,
              hotel_name,
              photo1,
              city,
              country,
              numberrooms,
              url,
            }) => (
              <div key={hotel_id} className="col-12 col-md-6 col-lg-4 mb-4">
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
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-custom mt-auto"
                    >
                      Más información
                    </a>
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
