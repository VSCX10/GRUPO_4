import React from 'react';
import { FaShieldAlt, FaUserLock, FaDatabase } from 'react-icons/fa';

const DatosPersonales = () => {
    return (
        <div className="politicas-container">
            <h1 className="main-title"><FaShieldAlt /> Política de Protección de Datos</h1>
            
            <div className="content-section">
                <h2><FaDatabase /> 1. Información que Recopilamos</h2>
                <p>En Mi Tiendita recopilamos los siguientes datos para brindarte un mejor servicio:</p>
                <ul>
                    <li>Datos de registro: Nombre completo, correo electrónico</li>
                    <li>Datos de transacciones: Dirección de entrega, historial de compras</li>
                    <li>Datos técnicos: Dirección IP, tipo de dispositivo, cookies</li>
                </ul>
            </div>

            <div className="content-section">
                <h2><FaUserLock /> 2. Uso de tu Información</h2>
                <p>Tus datos se utilizan exclusivamente para:</p>
                <ul>
                    <li>Procesar y entregar tus pedidos</li>
                    <li>Mejorar nuestra plataforma y servicios</li>
                    <li>Enviar ofertas personalizadas (solo si nos das tu consentimiento)</li>
                    <li>Cumplir con obligaciones legales</li>
                </ul>
            </div>

            <div className="highlight-box">
                <h3>🔒 Principios Fundamentales</h3>
                <div className="principles-grid">
                    <div className="principle">
                        <h4>Confidencialidad</h4>
                        <p>Tus datos nunca serán compartidos con terceros sin tu autorización expresa</p>
                    </div>
                    <div className="principle">
                        <h4>Seguridad</h4>
                        <p>Usamos encriptación SSL y protocolos de seguridad bancaria</p>
                    </div>
                    <div className="principle">
                        <h4>Transparencia</h4>
                        <p>Puedes solicitar acceso a tus datos en cualquier momento</p>
                    </div>
                </div>
            </div>

            <div className="content-section">
                <h2>3. Tus Derechos</h2>
                <p>De acuerdo con la Ley de Protección de Datos Personales (Ley N° 29733) tienes derecho a:</p>
                <ul>
                    <li>Solicitar acceso a tus datos personales</li>
                    <li>Solicitar la rectificación de información inexacta</li>
                    <li>Revocar tu consentimiento para tratamiento de datos</li>
                    <li>Eliminar tu cuenta permanentemente</li>
                </ul>
            </div>

            <div className="contact-section">
                <h2>📬 Contacto</h2>
                <p>Para ejercer tus derechos o consultas sobre privacidad:</p>
                <div className="contact-info">
                    <p>Correo: protecciondedatos@mitiendita.com</p>
                    <p>Dirección: Av. La Privacidad 123, Lima, Perú</p>
                    <p>Plazo máximo de respuesta: 15 días hábiles</p>
                </div>
            </div>
            </div>
    );
}
export default DatosPersonales;


