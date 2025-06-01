import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Olvidar.css';
const OlvidarContraseña = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/'); 
    };
    return (
        <div className="container">
            <h1>Olvidé mi contraseña</h1>
            <p>Se enviará un enlace a tu correo electrónico para que puedas validar tu identidad y restablecer tu contraseña. Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.</p>
            <div className="divider"></div>
            <form id="recoveryForm" onSubmit={handleSubmit}>
                <label htmlFor="email" className="label">Correo electrónico</label>
                <input type="email" id="email" className="email-input" placeholder="Ingresa tu correo electrónico" required />
                <button type="submit" className="btn">Recuperar contraseña</button>
            </form>
        </div>
    );
}

export default OlvidarContraseña;


