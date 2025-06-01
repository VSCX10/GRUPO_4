import React, { useState } from 'react';
import CartSummary from '../CartSummary/CartSummary.jsx';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation.jsx';
import { useCart } from '../../../context/CartContext.jsx';
import './Checkout.css';

const MetodoPago = ({ metodo, onConfirm }) => {
    if (metodo === 'tarjeta') {
        return (
            <div className="MetodoPagoBox">
                <form className="TarjetaForm" onSubmit={e => { e.preventDefault(); onConfirm(); }}>
                    <img
                        src="/img/TARJETADEBITO.jpg"
                        alt="Visa"
                        className="TarjetaForm-img"
                    />
                    <label>Número de la tarjeta</label>
                    <input type="text" placeholder="4575 6658 5785 6787" className="TarjetaForm-input" />
                    <label>Nombre</label>
                    <input type="text" placeholder="oscar blancarte" className="TarjetaForm-input" />
                    <div className="TarjetaForm-row">
                        <div>
                            <label>Fecha de expiración</label>
                            <input type="text" placeholder="10/20" className="TarjetaForm-input" />
                        </div>
                        <div>
                            <label>CVC</label>
                            <input type="text" placeholder="1234" className="TarjetaForm-input" />
                        </div>
                    </div>
                    <button className="TarjetaForm-btn" type="submit">Pagar</button>
                </form>
            </div>
        );
    }
    if (metodo === 'qr') {
        return (
            <div className="MetodoPagoBox MetodoPagoQR">
                <h2>Escanear QR</h2>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <img src="/img/PNGQR.png" alt="QR" className="MetodoPago-imgQR" />
                </a>
                <div className="MetodoPagoQR-timer">Válido por 05:00 minutos</div>
                <button
                    className="TarjetaForm-btn"
                    type="button"
                    onClick={onConfirm}
                >
                    Ya realicé el pago
                </button>
            </div>
        );
    }
    return null;
};

const Checkout = () => {
    const { cart } = useCart();
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        ciudad: '',
        departamento: '',
        direccion: '',
        codigoPostal: '',
        telefono: ''
    });
    const [showMetodoPago, setShowMetodoPago] = useState(false);
    const [error, setError] = useState('');
    const [metodo, setMetodo] = useState('');
    const [ordenCompletada, setOrdenCompletada] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in form) {
            if (!form[key]) {
                setError('Por favor completa todos los campos.');
                return;
            }
        }
        setError('');
        setShowMetodoPago(true);
    };

    const handleConfirmOrder = () => {
        setOrdenCompletada(true);
    };

    if (ordenCompletada) {
        return (
            <OrderConfirmation
                cart={cart}
                address={form}
            />
        );
    }

    return (
        <div className="CheckoutMainLayout">
            <div className="CheckoutContainer">
                <h1 className="Checkout-title"><b>Checkout</b></h1>
                {!showMetodoPago ? (
                    <>
                        <h3 className="Checkout-subtitle">Dirección de envío</h3>
                        <form className="CheckoutForm" onSubmit={handleSubmit}>
                            <div className="CheckoutForm-row">
                                <div>
                                    <label>Nombre</label>
                                    <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del usuario" required />
                                </div>
                                <div>
                                    <label>Apellido</label>
                                    <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido del usuario" required />
                                </div>
                            </div>
                            <div className="CheckoutForm-row">
                                <div>
                                    <label>Ciudad</label>
                                    <input name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Nombre de la ciudad" required />
                                </div>
                                <div>
                                    <label>Departamento</label>
                                    <input name="departamento" value={form.departamento} onChange={handleChange} placeholder="Nombre de la ciudad" required />
                                </div>
                            </div>
                            <div className="CheckoutForm-row">
                                <div className="CheckoutForm-full">
                                    <label>Dirección</label>
                                    <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Av. la molina 1233..." required />
                                </div>
                            </div>
                            <div className="CheckoutForm-row">
                                <div>
                                    <label>Código postal</label>
                                    <input name="codigoPostal" value={form.codigoPostal} onChange={handleChange} placeholder="Código postal" required />
                                </div>
                                <div>
                                    <label>Teléfono de contacto</label>
                                    <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Número de contacto" required />
                                </div>
                            </div>
                            {error && <div className="Checkout-error">{error}</div>}
                            <button className="CheckoutBtn" type="submit">Seleccionar método de pago</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h3 className="Checkout-subtitle">Método de pago</h3>
                        <div className="MetodoPagoSelector">
                            <label className={`MetodoPagoSelector-option${metodo === 'qr' ? ' selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="metodo"
                                    value="qr"
                                    checked={metodo === 'qr'}
                                    onChange={() => setMetodo('qr')}
                                />
                                <span>Generar QR</span>
                            </label>
                            <label className={`MetodoPagoSelector-option${metodo === 'tarjeta' ? ' selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="metodo"
                                    value="tarjeta"
                                    checked={metodo === 'tarjeta'}
                                    onChange={() => setMetodo('tarjeta')}
                                />
                                <span>Tarjeta / Transferencia</span>
                            </label>
                        </div>
                        {metodo && <MetodoPago metodo={metodo} onConfirm={handleConfirmOrder} />}
                    </>
                )}
            </div>
            <CartSummary />
        </div>
    );
};

export default Checkout;