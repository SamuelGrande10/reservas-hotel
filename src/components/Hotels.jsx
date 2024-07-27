import "./Hotels.css";

// eslint-disable-next-line react/prop-types
const Hotels = ({ hotels }) => {
  return (
    <main className="hotels-container">
      {
        // eslint-disable-next-line react/prop-types
        hotels.slice(0, 12).map((hotel) => (
          <div key={hotel.hotel_id} className="hotel-card">
            <h2>{hotel.hotel_name}</h2>
            <img src={hotel.photo1} alt={hotel.hotel_name} />
            <p>
              {hotel.city}, {hotel.country}
            </p>
            <a href={hotel.url} target="_blank" rel="noopener noreferrer">
              Más información
            </a>
          </div>
        ))
      }
    </main>
  );
};

export default Hotels;
