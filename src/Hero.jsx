import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles.scss';

const Hero = () => {
  return (
    <header className="hero" id="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">Diseño y Repotenciación de Maquinaria Industrial</h1>
        <p className="hero__subtitle">
          Llevamos tu operación al siguiente nivel con soluciones de ingeniería electromecánica. Desde la automatización de procesos industriales hasta el mantenimiento de equipos, optimizamos tu productividad.
        </p>
        <a href="#contacto" className="hero__cta">
          Optimiza tu Operación <FiArrowRight className="hero__cta-icon" />
        </a>
      </div>
    </header>
  );
};

export default Hero;