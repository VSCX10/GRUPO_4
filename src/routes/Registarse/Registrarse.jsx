import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Registrarse.css';

const Registrarse = () => {
    const [dni, setDni] = useState('');
    const [dniError, setDniError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!nombre.trim() || !apellido.trim() || !email.trim() || !dni.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('Todos los campos son obligatorios');
        valid = false;
        }
        if (!/^\d+$/.test(dni)) {
            setDniError('El DNI debe contener solo números');
            valid = false;
        } else {
            setDniError('');
        }
        if (password.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres');
            valid = false;
        } else if (password !== confirmPassword) {
            setPasswordError('Las contraseñas no coinciden');
            valid = false;
        } else {
            setPasswordError('');
        }
        if (!valid) return;

        const newUser = { nombre, apellido, email, dni, password };
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users)); 

        localStorage.setItem('user', JSON.stringify(newUser)); 
        
        navigate('/');
    };

    return (
        <div className="register-container">
            <h1>Registro</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-columns">
                    <div className="column">
                        <div className="form-group">
                            <label htmlFor="nombre"><strong>Nombre</strong></label>
                            <input 
                                type="text" 
                                id="nombre" 
                                placeholder="Nombre del usuario"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><strong>Correo</strong></label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="usuario@gmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><strong>Contraseña</strong></label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-group">
                            <label htmlFor="apellido"><strong>Apellido</strong></label>
                            <input 
                                type="text" 
                                id="apellido" 
                                placeholder="Apellido del usuario"
                                value={apellido}
                                onChange={e => setApellido(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dni"><strong>DNI</strong></label>
                            <input 
                                type="text" 
                                id="dni" 
                                placeholder="DNI"
                                value={dni}
                                onChange={e => setDni(e.target.value)}
                            />
                            {dniError && <span style={{color: 'red', fontSize: '14px'}}>{dniError}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password"><strong>Confirmar contraseña</strong></label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                placeholder="Contraseña"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            {passwordError && <span style={{color: 'red', fontSize: '14px'}}>{passwordError}</span>}
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <button type="submit" className="register-button">
                    <strong>Registrarme</strong>
                </button>
            </form>
        </div>
    );
};

export default Registrarse;