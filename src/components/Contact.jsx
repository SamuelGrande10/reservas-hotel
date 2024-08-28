import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";


const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-header">
        <h1>CONTÁCTANOS</h1>
        <p>Somos una empresa de reservas de hoteles</p>
        </div>
      <div className="contact-container">
        <div className="contact-content">
          <form className="contact-form">
            <label>
              Name *
              <input type="text" name="name" required />
            </label>
            <label>
              Email *
              <input type="email" name="email" required />
            </label>
            <label>
              Asunto *
              <input type="text" name="company" />
            </label>
            <label>
              Mensaje *<textarea name="message" required></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
          <div className="contact-info">
            <h2>Grain & Mortar</h2>
            <p>
              1111 N. 13th St. Suite 141
              <br />
              Omaha, NE 68102
            </p>
            <p>
              <a
                href="https://goo.gl/maps/xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions »
              </a>
            </p>
            <p>
              <strong>New business:</strong>
              <br />
              <a href="mailto:hello@grainandmortar.com">Traveluxe@gmail.com</a>
              <br />
              402-370-8170
            </p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096817!2d144.95373631531563!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773fae2d4d5e51!2sGrain%20%26%20Mortar!5e0!3m2!1sen!2sus!4v1625085229650!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
