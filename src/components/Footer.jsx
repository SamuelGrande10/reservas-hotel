import React from 'react';
import '../components/Footer.css';  

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h5 className="footer__title">Sobre Nosotros</h5>
                    <p className="footer__text">Somos una empresa dedicada a...</p>
                </div>
                <div className="footer__section">
                    <h5 className="footer__title">Enlaces Útiles</h5>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#!" className="footer__link">Inicio</a></li>
                        <li className="footer__item"><a href="#!" className="footer__link">Servicios</a></li>
                        <li className="footer__item"><a href="#!" className="footer__link">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h5 className="footer__title">Contacto</h5>
                    <p className="footer__text">Email: info@empresa.com<br/>Teléfono: 123-456-7890</p>
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
