import React from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Navbar from './Navbar';
import SEO from './SEO';
import './styles.scss';

const App = () => {
  return (
    <>
      <SEO 
        title="Diseño y Repotenciación de Maquinaria Industrial | DERMAQ"
        description="Optimiza tu producción con DERMAQ. Ofrecemos diseño, repotenciación y mantenimiento de equipos industriales en Antioquia. ¡Potencia tu eficiencia hoy!"
        ogTitle="DERMAQ: Expertos en Diseño y Repotenciación de Maquinaria Industrial"
        ogDescription="Llevamos tu operación al siguiente nivel con soluciones de ingeniería electromecánica, automatización de procesos y mantenimiento industrial en Antioquia."
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DERMAQ S.A.S. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default App;