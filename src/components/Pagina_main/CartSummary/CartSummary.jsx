import React from 'react';
import { useCart } from '../../../context/CartContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './CartSummary.css';

const CartSummary = () => {
    const { cart, total, clearCart } = useCart();
    const discount = 1.50; 
    const navigate = useNavigate();

    const handleGenerarOrden = () => {
        if (cart.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        const nuevaOrden = {
            id: Date.now(),
            fecha: new Date().toISOString().slice(0, 10),
            total: (total - discount).toFixed(2),
            productos: cart,
        };

        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        storedOrders.push(nuevaOrden);
        localStorage.setItem("orders", JSON.stringify(storedOrders));
        clearCart();
        navigate("/mi-cuenta/ordenes");
    };

    return (
        <div className="CartSummary">
            <h3>Resumen de la compra</h3>
            <div className="CartSummary-row">
                <span>Productos ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                <span>S/ {total.toFixed(2)}</span>
            </div>
            <div className="CartSummary-row">
                <span>Delivery</span>
                <span className="CartSummary-green">GRATIS</span>
            </div>
            <div className="CartSummary-row">
                <span>Descuentos</span>
                <span className="CartSummary-red">-S/ {discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="CartSummary-row CartSummary-total">
                <span>Total</span>
                <span>S/ {(total - discount).toFixed(2)}</span>
            </div>
            <Link className="CartSummary-btn" to="/checkout">
                Continuar compra
            </Link>
            <button className="CartSummary-btn" style={{marginTop: 10}} onClick={handleGenerarOrden}>
                Generar Orden
            </button>
        </div>
    );
};

export default CartSummary;