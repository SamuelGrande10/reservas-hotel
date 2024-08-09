import React from 'react';
import '../components/Footer.css';  
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h5 className="footer__title">Sobre Nosotros</h5>
                    <p className="footer__text">Somos una empresa dedicada a la reserva de hoteles.</p>
                </div>
                <div className="footer__section">
                    <h5 className="footer__title">Enlaces Útiles</h5>
                    <ul className="footer__list">
                        <li className="footer__item">
                    <Link to="/home" className="footer__link">Inicio</Link>
                    </li>
                    <li className="footer__item">
                    <Link to="/services" className="footer__link">Servicios</Link>
                    </li>
                    <li className="footer__item">
                    <Link to="/contact" className="footer__link">Contacto</Link>
                    </li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h5 className="footer__title">Contacto</h5>
                    <p className="footer__text">Email: Traveluxe@gmail.com<br/>Teléfono: 402-370-8170</p>
                </div>
            </div>
            <div className="footer__social">
                <a href="#" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="footer__social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="footer__social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="footer__social-link"><i className="fab fa-github"></i></a>
            </div>
        </footer>
    );
};

export default Footer;

