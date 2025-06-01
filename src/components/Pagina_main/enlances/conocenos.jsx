import React from 'react';
import { FaShoppingBasket, FaHeart, FaGlobeAsia, FaShippingFast } from 'react-icons/fa';
import './conocenos.css'; 
const ConoceMnos = () => {
    return (
        <div className="conoce-container">
            <h1 className="main-title">¡Bienvenido a Tiendas Jumi! 🛒</h1>
            
            <div className="hero-section">
                <div className="hero-text">
                    <h2>Tu mercado virtual de confianza</h2>
                    <p>Desde 2023 llevando frescura y variedad a tu hogar</p>
                </div>  
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <FaShoppingBasket className="feature-icon"/>
                    <h3>Más de 5,000 productos</h3>
                    <p>Desde alimentos básicos hasta productos gourmet y asiáticos</p>
                </div>

                <div className="feature-card">
                    <FaGlobeAsia className="feature-icon"/>
                    <h3>Sabores del mundo</h3>
                    <p>Rincón especial con productos importados de Asia y Europa</p>
                </div>

                <div className="feature-card">
                    <FaShippingFast className="feature-icon"/>
                    <h3>Entrega express</h3>
                    <p>Recibe tus compras en menos de 24 horas</p>
                </div>

                <div className="feature-card">
                    <FaHeart className="feature-icon"/>
                    <h3>Hecho con amor</h3>
                    <p>Selección artesanal de productos locales</p>
                </div>
            </div>

            <div className="about-section">
                <h2 className="section-title">Nuestra Esencia</h2>
                <div className="content-wrapper">
                    <div className="text-content">
                        <p>En <strong>Tiendas Jumi</strong> reinventamos la experiencia de compra:</p>
                        <ul>
                            <li>🏆 Calidad certificada en todos nuestros productos</li>
                            <li>🌱 Opciones orgánicas y sostenibles</li>
                            <li>👨🍳 Asesoramiento nutricional gratuito</li>
                            <li>🔄 Programa de reciclaje de envases</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img 
                            src="../../img/equipo-de-cinco-vendedores-en-supermercado-47155737.jpg.webp" 
                            alt="Equipo Mi Tiendita" 
                            className="team-image"
                        />
                    </div>
                </div>
            </div>
            </div>
            );
        }
        
        export default ConoceMnos;