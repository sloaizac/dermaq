import React from 'react';
import './styles.scss';

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__text-content">
          <h2 className="about__header">Tu Aliado en Ingeniería Electromecánica</h2>
          <p>
            En DERMAQ, combinamos experiencia e innovación para ofrecer soluciones de ingeniería que marcan la diferencia. Nuestra misión es optimizar tus procesos a través del <strong>diseño y repotenciación de maquinaria industrial</strong>, con un enfoque absoluto en la calidad, la eficiencia y la seguridad.
          </p>
          <p>
            Aspiramos a ser el referente de confianza en la industria, construyendo relaciones a largo plazo y contribuyendo al éxito de cada cliente. Tu visión y nuestros conocimientos, juntos para alcanzar la máxima productividad.
          </p>
        </div>
        <div 
          className="about__image-placeholder" 
          role="img" 
          aria-label="Taller de maquinaria industrial con equipos de alta tecnología."
        >
        </div>
      </div>
    </section>
  );
};

export default About;