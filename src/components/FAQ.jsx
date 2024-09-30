/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { StyledNavLink } from "./StyledNavLink";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import backgroundImage from "../assets/images/bahamas-atlantis.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es Traveluxe?",
      answer:
        "Traveluxe es una empresa dedicada a la reserva de hoteles que ofrece una plataforma fácil de usar para encontrar, comparar y reservar alojamientos en destinos de todo el mundo.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Traveluxe acepta una variedad de métodos de pago, incluyendo tarjetas de crédito, tarjetas de débito y pagos en línea a través de plataformas seguras como PayPal..",
    },
    {
      question: "¿Qué necesito para comenzar?",
      answer:
        "Para comenzar con Traveluxe, solo necesitas crear una cuenta en nuestra plataforma, donde podrás ingresar tus datos de contacto. Una vez registrado, puedes buscar hoteles, comparar opciones y realizar reservas.",
    },
    {
      question: "¿Cuál es el precio de usar Traveluxe?",
      answer:
        "Los precios de los hoteles varían según el alojamiento y la temporada, y se muestran claramente durante el proceso de reserva..",
    },
    {
      question: "¿Cómo funciona Traveluxe?",
      answer:
        "Traveluxe funciona permitiendo a los usuarios buscar hoteles en diferentes destinos, filtrar resultados según sus preferencias y comparar precios. Una vez que encuentras un hotel que te gusta, puedes reservarlo directamente a través de nuestra plataforma. Nos encargamos de la coordinación con el hotel para asegurar que tu reserva sea confirmada.",
    },
  ];

  return (
    <>
      <Navbar />
      <FAQBackground>
        <FAQContainer>
          <FAQTitle>Preguntas frecuentes sobre Traveluxe</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index} onClick={() => toggleFAQ(index)}>
              <Question>{faq.question}</Question>
              {openIndex === index && <Answer>{faq.answer}</Answer>}
            </FAQItem>
          ))}
          <MoreQuestions>
            <StyledNavLink to="/contact">¿Aun tienes dudas?</StyledNavLink>
          </MoreQuestions>
        </FAQContainer>
      </FAQBackground>
      <Footer />
    </>
  );
};
export default FAQ;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%; /* Adaptable a diferentes tamaños de pantalla */
  margin: 40px auto; /* Espacio superior e inferior */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 700px; /* Para tablets y pantallas medianas */
  }

  @media (min-width: 1024px) {
    max-width: 900px; /* Para pantallas grandes */
  }
`;

const FAQBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Mantiene el fondo fijo */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const FAQTitle = styled.h1`
  font-size: 1.5rem;
  color: #1f363d;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2rem; /* Aumentar el tamaño en pantallas más grandes */
  }
`;

const FAQItem = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6f7ff;
  }

  @media (min-width: 768px) {
    padding: 20px; /* Mayor padding en pantallas más grandes */
  }
`;

const Question = styled.h2`
  font-size: 1.2rem;
  color: #40798c;

  @media (min-width: 768px) {
    font-size: 1.5rem; /* Aumentar el tamaño en pantallas más grandes */
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 1.2rem; /* Aumentar el tamaño en pantallas más grandes */
  }
`;

const MoreQuestions = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 30px; /* Mayor espacio en pantallas más grandes */
  }
`;
