import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './styles.scss';

const WhatsAppButton = () => {
  const phoneNumber = '573172657780'; // Replace with your WhatsApp number
  const message = 'Hola, estoy interesado en sus servicios de ingeniería.'; // Pre-filled message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-float__icon" />
    </a>
  );
};

export default WhatsAppButton;
