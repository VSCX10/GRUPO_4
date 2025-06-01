import React from 'react';
import CartSummary from '../CartSummary/CartSummary.jsx';
import './OrderConfirmation.css';

const generateOrderId = () =>
  'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();

const getLeadTime = () => {
  const days = Math.floor(Math.random() * 3) + 3; 
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + days);
  return fecha.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const OrderConfirmation = ({ cart, address }) => {
  const orderId = generateOrderId();
  const leadTime = getLeadTime();

  return (
    <div className="OrderMainLayout">
      <div>
        <h1 className="Order-title">Orden completada :)</h1>
        <p>Gracias por tu compra!</p>
        <a className="Order-link" href="#resumen">Resumen de la compra</a>
        <div className="OrderContent">
          <div className="OrderCartBox" id="resumen">
            {cart.map(item => (
              <div className="OrderCartItem" key={item.id}>
                <img src={item.image} alt={item.name} className="OrderCartItem-img" />
                <div>
                  <b>{item.name}</b>
                  <div className="OrderCartItem-desc">{item.description}</div>
                  <div className="OrderCartItem-llega">Llega mañana</div>
                </div>
                <div className="OrderCartItem-price">S/ {item.price.toFixed(2)}</div>
                <div className="OrderCartItem-qty">Cantidad: {item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="OrderSide">
            <CartSummary />
            <div className="OrderAddressCard">
              <div className="OrderAddress-title">
                Dirección de envío
                <img src="/img/delivery.png" alt="delivery" className="OrderAddress-img" />
              </div>
              <div>{address.direccion}</div>
              <div>{address.ciudad} - {address.departamento}</div>
              <div>Celular de contacto: {address.telefono}</div>
              <div className="OrderAddress-lead">
                Fecha de entrega aproximada: <b>{leadTime}</b>
              </div>
            </div>
            <button className="OrderOffersBtn">Ver más ofertas</button>
          </div>
        </div>
        <div className="Order-id">ID de orden: <b>{orderId}</b></div>
      </div>
      <div className="Order-check">
        <span role="img" aria-label="check" style={{fontSize: 48, color: "#2ecc40"}}>✔️</span>
      </div>
    </div>
  );
};

export default OrderConfirmation;