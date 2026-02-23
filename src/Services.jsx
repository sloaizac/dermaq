import React from 'react';
import { FaTools, FaShieldAlt } from 'react-icons/fa';
import { CgSync } from 'react-icons/cg';
import './styles.scss';

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="services__container">
        <h2 className="services__title">Soluciones Integrales para Maquinaria Industrial</h2>

        <div className="services__grid">
          {/* Service 1 */}
          <div className="services__card">
            <div className="services__card-icon"><FaTools /></div>
            <h3 className="services__card-title">Diseño y Fabricación a Medida</h3>
            <p className="services__card-description">
              Creamos soluciones de ingeniería desde cero, ideal para la <strong>automatización de procesos industriales</strong>. Diseñamos y fabricamos equipos y sistemas de control adaptados a tus necesidades.
            </p>
          </div>

          {/* Service 2 */}
          <div className="services__card">
            <div className="services__card-icon"><CgSync /></div>
            <h3 className="services__card-title">Repotenciación y Automatización</h3>
            <p className="services__card-description">
              Modernizamos tus equipos para mejorar su eficiencia. Realizamos la <strong>repotenciación de maquinaria industrial</strong> para extender su vida útil y optimizar tu inversión.
            </p>
          </div>

          {/* Service 3 */}
          <div className="services__card">
            <div className="services__card-icon"><FaShieldAlt /></div>
            <h3 className="services__card-title">Mantenimiento de Equipos Industriales</h3>
            <p className="services__card-description">
              Aseguramos la continuidad de tu operación. Ofrecemos planes de <strong>mantenimiento de equipos industriales</strong> para que tus activos estén siempre en óptimas condiciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;