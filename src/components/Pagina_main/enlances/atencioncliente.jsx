import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const AtencionCliente = () => {
    return (
        <div className="atencion-container">
            <h1 className="main-title">¿Necesitas ayuda? 📞</h1>
            
            <div className="contact-cards">
                <div className="contact-card">
                    <FaPhone className="contact-icon"/>
                    <h3>Línea directa</h3>
                    <p>(01) 700-6000</p>
                    <small>Lunes a Viernes 8am - 10pm</small>
                </div>

                <div className="contact-card">
                    <FaEnvelope className="contact-icon"/>
                    <h3>Correo electrónico</h3>
                    <p>soporte@mitiendita.com</p>
                    <small>Respuesta en menos de 24h</small>
                </div>

                <div className="contact-card">
                    <FaCommentDots className="contact-icon"/>
                    <h3>Chat en vivo</h3>
                    <p>Disponible en la app</p>
                    <small>8am - 8pm</small>
                </div>
            </div>

            <div className="help-section">
                <div className="faq-section">
                    <h2><FaClock className="section-icon"/> Preguntas frecuentes</h2>
                    
                    <div className="faq-item">
                        <h4>¿Cómo realizo un seguimiento de mi pedido?</h4>
                        <p>Recibirás un correo con número de seguimiento y podrás monitorearlo desde tu cuenta.</p>
                    </div>

                    <div className="faq-item">
                        <h4>¿Qué métodos de pago aceptan?</h4>
                        <p>Tarjetas crédito/débito, PayPal, y efectivo al recibir (solo Lima).</p>
                    </div>

                    <div className="faq-item">
                        <h4>¿Hacen entregas internacionales?</h4>
                        <p>Actualmente solo entregamos en territorio peruano.</p>
                    </div>
                </div>

                <div className="contact-form">
                    <h2><FaEnvelope className="section-icon"/> Escríbenos</h2>
                    
                    <form>
                        <div className="form-group">
                            <label>Nombre completo</label>
                            <input type="text" required />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" required />
                        </div>

                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea rows="5" required></textarea>
                        </div>

                        <button type="submit">Enviar mensaje</button>
                    </form>
                </div>
                <br />
                
            </div>
            </div>
    );
}
export default AtencionCliente;
