import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video from "../assets/videos/playa_fondo.mp4";
import { Link } from "react-router-dom";
import "../components/Home.css";

const Home = () => {

    return (
        <>
            <Navbar />
            <section className="container mt-5">
                <h3 className="fst-italic text-center bienvenida">
                    Bienvenido a <span>Traveluxe</span>
                    <i className="fa-solid fa-umbrella-beach ms-4"></i>
                </h3>
            </section>

            <div className="container-fluid p-0 mt-5">
                <div className="video-background">
                    <div className="overlay"></div>
                    <video autoPlay muted loop className="video w-100" id="background-video">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="content">
                        <h1>Descubre Hoteles Únicos en Todo el Mundo</h1>
                        <p className="quitar-parrafo">
                            Desde la elegancia de las ciudades europeas hasta la serenidad de las playas en 
                            Asia, cada hotel ha sido seleccionado para ofrecerte una experiencia única e 
                            inolvidable. Ya sea que estés buscando una escapada romántica, una aventura llena 
                            de adrenalina o un refugio de lujo, aquí encontrarás el lugar perfecto para tus 
                            próximas vacaciones.
                        </p>
                        <p>
                            No importa el destino que elijas, estamos comprometidos a hacer de tu estancia una experiencia 
                            inolvidable. Nuestro equipo de expertos está a tu disposición para ayudarte a planificar cada detalle, 
                            asegurando que tu viaje sea tan especial como lo imaginas. Con tarifas exclusivas y una atención personalizada, 
                            estamos aquí para convertir tus sueños de viaje en realidad.
                        </p>
                        <p>
                            Reserva ahora y comienza a descubrir el mundo de una manera nueva y emocionante. Cada hotel en nuestra colección es una puerta de entrada a un destino extraordinario, esperando ser explorado por ti.
                        </p>
                        <Link
                            to={`/reservar`}
                            className="btn btn-reservar"
                        >
                            Reserva ahora
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid galeria mb-5 pb-5 pt-5">
                <h4 className="text-center text-light">¡Conoce destinos que te sorprenderán!</h4>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/hamacas-palmeras_1203-201.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen1" className="w-100"/>
                    </div>
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/hamacas-blancas-sombrillas_1203-2073.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen2" className="w-100"/>
                    </div>
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/cama-playa_1203-305.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen3" className="w-100"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/exterior-sombrilla-silla_74190-4495.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen4" className="w-100"/>
                    </div>
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/cielo-palma-ocio-paraiso-viajes_1203-4503.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen5" className="w-100"/>
                    </div>
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/foto-gratis/recurrir-tropical-hermosa-vista-paisaje_1203-4848.jpg?ga=GA1.1.1231101684.1723758522&semt=ais_hybrid" alt="imagen6" className="w-100"/>
                    </div>
                </div>
            </div>
            
            <section className="customer-reviews my-5">
                <div className="container">
                    <h2 className="text-center mb-4">Opiniones de Nuestros Huéspedes</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>"Una experiencia increíble. El personal fue muy amable y las instalaciones estaban impecables. ¡Definitivamente volveré!"</p>
                                        <footer className="blockquote-footer">Juan Pérez</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>"El hotel superó nuestras expectativas. Las habitaciones eran cómodas y la vista era espectacular. Lo recomiendo altamente."</p>
                                        <footer className="blockquote-footer">Ana Gómez</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>"Disfrutamos mucho nuestra estancia. La ubicación es excelente y el desayuno fue fantástico. ¡Gracias por una estancia maravillosa!"</p>
                                        <footer className="blockquote-footer">Luis Martínez</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Home;
