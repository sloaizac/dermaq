import React, { useState } from 'react';
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_company: '',
    user_email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setErrorMessage('Por favor, completa los campos obligatorios.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Reemplaza con tus IDs reales de EmailJS
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      // Simulamos la latencia de red para el ejemplo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ user_name: '', user_company: '', user_email: '', message: '' });
      
      // Ocultar mensaje de éxito después de unos segundos
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error enviando el correo:', error);
      setStatus('error');
      setErrorMessage('Hubo un problema de conexión. Por favor, intenta de nuevo o contáctanos al +57 (317) 265 77 80.');
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <h2 className="contact__title">¿Listo para empezar?</h2>
        <p className="contact__info">
          Hablemos de tu proyecto. Completa el formulario y nuestro equipo de ingenieros se pondrá en contacto para explorar cómo podemos potenciar la eficiencia de tu planta.
        </p>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__form-group">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nombre completo *" 
              value={formData.user_name}
              onChange={handleChange}
              disabled={status === 'loading'}
              required 
              aria-label="Nombre completo"
            />
          </div>
          <div className="contact__form-group">
            <input 
              type="text" 
              name="user_company" 
              placeholder="Empresa (Opcional)" 
              value={formData.user_company}
              onChange={handleChange}
              disabled={status === 'loading'}
              aria-label="Empresa (Opcional)"
            />
          </div>
          <div className="contact__form-group">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Correo electrónico *" 
              value={formData.user_email}
              onChange={handleChange}
              disabled={status === 'loading'}
              required 
              aria-label="Correo electrónico"
            />
          </div>
          <div className="contact__form-group">
            <textarea 
              name="message" 
              placeholder="¿En qué podemos ayudarte? *" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
              required 
              aria-label="Mensaje"
            />
          </div>

          {errorMessage && <p className="contact__error">{errorMessage}</p>}
          {status === 'success' && <p className="contact__success">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>}

          <button 
            type="submit" 
            className={`contact__btn ${status === 'loading' ? 'contact__btn--loading' : ''}`}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        <div className="contact__direct-info">
          <p>O contáctanos directamente:</p>
          <p><strong>Email:</strong> dermaqsas@gmail.com</p>
          <p><strong>Teléfono:</strong> +57 (317) 265 77 80</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;